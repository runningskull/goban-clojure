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


(def app-state
  (atom {:things []}))

(defn comment [app owner {:keys [author text] :as opts}]
  (om/component
   (let [raw-markup (md/mdToHtml text)]
     (html [:div.comment
            [:h2.commentAuthor author]
            [:span (as-hiccup (parse raw-markup))]]))))

(defn comment-list [app]
  (om/component
   (html [:div.commentList
          (om/build comment app {:opts {:author "Shiner Dog"
                                        :text "I want __all the food__!"}})
          (om/build comment app {:opts {:author "Stinky Hound"
                                        :text "My breath reeks!"}})])))

(defn comment-form [app]
  (om/component
   (html [:div.commentForm "alo world. i am a comment form!"])))

(defn comment-box [app]
  (om/component
   (html [:div
          "hello world! i am a sablono commentbox"
          (om/build comment-list app)
          (om/build comment-form app)])))

(defn go-game-app [app owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
               (om/build comment-box app)))))

(om/root app-state go-game-app (.getElementById js/document "go"))



;; (ns go-game-client.app
;;   (:require-macros [cljs.core.async.macros :refer [go alt!]])
;;   (:require [goog.events :as events]
;;             [cljs.core.async :refer [put! <! >! chan timeout]]
;;             [markdown.core :as md]
;;             [om.core :as om :include-macros true]
;;             [om.dom :as dom :include-macros true]
;;             [cljs-http.client :as http]
;;             [go-game-client.utils :refer [guid]])
;;   (:import [goog History]
;;            [goog.history EventType]))

;; (enable-console-print!)




;; ;;;; Utils

;; (defn- with-id [m]
;;   (assoc m :id (guid)))

;; (defn- fetch-comments [app opts]
;;   (go (let [{{cs :comments} :body} (<! (http/get (:url opts)))]
;;         (om/update!
;;          app #(assoc % :comments (vec (map with-id cs)))))))


;; (defn- value-from-node [owner field]
;;   (let [n (om/get-node owner field)
;;         v (-> n .-value clojure.string/trim)]
;;     (when-not (empty? v)
;;       [v n])))

;; (defn- clear-nodes! [& nodes]
;;   (doall (map #(set! (.-value %) "") nodes)))



;; ;;;; Components

;; (def app-state
;;   (atom {:comments []}))

;; (defn comment [{:keys [author text] :as c} opts]
;;   (om/component
;;    (let [raw-markup (md/mdToHtml text)
;;          color "red"]
;;      (dom/div #js {:className "comment"}
;;               (dom/h2 #js {:className "commentAuthor"} author)
;;               (dom/span #js {:dagerouslySetInnerHTML #js {:__html raw-markup}})))))

;; (defn comment-list [app opts]
;;   (om/component
;;    (dom/div #js {:className "commentList"}
;;             (into-array
;;              (map #(om/build comment app
;;                              {:path [:components %]
;;                               :key :id})
;;                   (range (count (:comments app))))))))

;; (defn save-comment! [comment app opts]
;;   (do (om/update! app [:comments]
;;                   (fn [comments] (conj comments (assoc comment :id (guid)))))
;;       (go (let [res (<! (http/post (:url opts) {:json-params comment}))]
;;             (prn (:message res))))))

;; (defn handle-submit [e app owner opts]
;;   (let [[author author-node] (value-from-node owner "author")
;;         [text text-node] (value-from-node owner "text")]
;;     (when (and author text)
;;       (save-comment! {:author author :text text} app opts)
;;       (clear-nodes! author-node text-node))
;;     false))

;; (defn comment-form [app opts]
;;   (reify
;;     om/IRender
;;     (render [_ owner]
;;       (dom/form
;;        #js {:className "commentForm" :onSubmit #(handle-submit % app owner opts)}
;;        (dom/input #js {:type "text" :placeholder "Your Name" :ref "author"})
;;        (dom/input #js {:type "text" :placeholder "Say something..." :ref "text"})
;;        (dom/input #js {:type "submit" :value "Post"})))))

;; (defn comment-box [app opts]
;;   (reify
;;     om/IInitState
;;     (init-state [_ owner]
;;       (om/update! app #(assoc % :comments [])))
;;     om/IWillMount
;;     (will-mount [_ owner]
;;       (go (while true
;;             (fetch-comments app opts)
;;             (<! (timeout (:poll-interval opts))))))
;;     om/IRender
;;     (render [_ owner]
;;       (dom/div #js {:className "commentBox"}
;;                (dom/h1 nil "Comments")
;;                (om/build comment-list app)
;;                (om/build comment-form app {:opts opts})))))


;; (defn go-game [app]
;;   (reify
;;     om/IRender
;;     (render [_ owner]
;;       (dom/div nil
;;                (om/build comment-box app
;;                          {:opts {:poll-interval 2000
;;                                  :url "/comments"}})))))



;; (om/root app-state go-game (.getElementById js/document "go"))
