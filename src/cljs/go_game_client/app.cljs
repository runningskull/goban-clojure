(ns go-game-client.app
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [markdown.core :as md]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]
            [hickory.core :refer [parse as-hiccup]]
            [sablono.core :as html :refer [html] :include-macros true]
            [go-game-client.utils :refer [guid]])
  (:import [goog History]
           [goog.history EventType]))


(enable-console-print!)


;;;; Utils

(defn- debugger! []
  (js/eval "debugger"))

(defn- with-id [m]
  (assoc m :id (guid)))

(defn- value-from-node [component field-ref]
  (let [n (om/get-node component field-ref)
        v (-> n .-value clojure.string/trim)]
    (when-not (empty? v)
      [v n])))

(defn- clear-nodes! [& nodes]
  (doall (map #(set! (.-value %) "") nodes)))



;;;; Server Communication

(defn fetch-comments [url]
  (let [c (chan)]
    (go (let [{{comments :comments} :body} (<! (http/get url))]
          (>! c (vec (map with-id comments)))))
    c))

(defn save-comment! [comment url]
  (go (let [res (<! (http/post url {:json-params comment}))]
        (prn (get-in res [:body :message])))))



;;;; Application

(def app-state
  (atom {}))

(defn handle-submit [e owner opts]
  (.preventDefault e)
  (let [[author author-node] (value-from-node owner "author")
        [text text-node] (value-from-node owner "text")]
    (when (and author text)
      (prn {:url opts})
      (save-comment! {:author author :text text} (:url opts))
      (clear-nodes! author-node text-node))))

(defn comment [{:keys [author text] :as c} owner opts]
  (om/component
   (let [raw-markup (md/mdToHtml text)]
     (html [:div.comment
            [:h2.commentAuthor author]
            [:span (as-hiccup (parse raw-markup))]]))))

(defn comment-list [{:keys [comments]}]
  (om/component
   (html [:div.commentList
          (om/build-all comment comments {:key :id})])))

(defn comment-form [app owner opts]
  (om/component
   (html [:form.commentForm {:onSubmit #(handle-submit % owner opts)}
          [:input {:type "text" :placeholder "Your Name" :ref "author"}]
          [:input {:type "text" :placeholder "Say something..." :ref "text"}]
          [:input {:type "submit" :value "SAY IT"}]])))

(defn comment-box [app owner opts]
  (reify
    om/IInitState
    (init-state [_]
      (om/transact! app [:comments] (fn [] [])))

    om/IWillMount
    (will-mount [_]
      (go (while true
            (let [comments (<! (fetch-comments (:url opts)))]
              (om/update! app #(assoc % :comments comments)))
            (<! (timeout (:poll-interval opts))))))

    om/IRender
    (render [_]
      (html [:div.commentBox
             [:h1 "Comments"]
             (om/build comment-list app)
             (om/build comment-form app {:opts opts})]))))

(defn go-game-app [app owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
               (om/build comment-box app
                         {:opts {:url "/comments"
                                 :poll-interval 2000}})))))

(om/root app-state go-game-app (.getElementById js/document "go"))


