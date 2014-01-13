(ns goban
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<! >! chan timeout]]
            [chord.client :refer [ws-ch]]
            [cloact.core :as cloact :refer [atom]]
            [goban-client.utils :refer [guid]]
            [goban-lib.core :as lib]))

(enable-console-print!)



;;;; Display

(def dom-pieces {:black :b
                 :white :i})

(def dom-board-classes {19 "nineteen"
                        13 "thirteen"
                        9 "nine"
                        :black "black"
                        :white "white"})



;;;; Application

(def history (atom []))
(def input-locked (atom false))
(def alert-msg (atom {}))

(def app-state
  (atom {:mode :alternate-moves
         :turn-number 0
         :whose-turn :black
         :ko-history #{}
         :board-size lib/default-board-size
         :board (lib/empty-board lib/default-board-size)}))



;;;; UI Event Handlers

(defn goto-history [evt]
  (let [turn (js/parseInt (-> evt .-target .-value))
        hist @history]
    (when (< turn (count hist)) (reset! app-state (hist turn)))
    (reset! input-locked (not= turn (- (count hist) 1)))))

(defn place-stone [[x y :as xy]]
  (when (not @input-locked)
   (let [app @app-state
         new-board (lib/place-stone (:board app) (:whose-turn app) xy (:ko-history app))]
     (when new-board
       (swap! app-state assoc :board new-board)
       (when (= :alternate-moves (:mode app))
         (reset! alert-msg {})
         (swap! app-state assoc :whose-turn (lib/next-color (:whose-turn app)))
         (swap! app-state assoc :turn-number (inc (:turn-number app)))
         (swap! app-state assoc :ko-history (conj (:ko-history app)
                                                  (lib/hash-board new-board)))
         ;; TODO: this isn't very efficient
         (swap! history conj @app-state)))
     (when-not new-board
       (reset! alert-msg {:class "err" :msg "Invalid move!"})
       (js/setTimeout #(reset! alert-msg {}) 2000)))))



;;;; Components

(defn stone [{:keys [color]}]
  [(dom-pieces color)])

(defn point [{s :stone col :col row :row}]
  [:li {:key (guid)
        :className (when s "occupied")
        :on-click #(place-stone [col row])}
   (if s [stone s] "")])

(defn row [{:keys [row-data row-num]}]
  [:ul {:key (guid)}
   (for [i (range (count row-data))]
     [point {:stone (row-data i) :row row-num :col i}])])

(defn board []
  (let [app @app-state
        board-size (:board-size app)
        board (:board app)]
    [:div#board {:className (str (dom-board-classes board-size) " "
                                 "turn-" (dom-board-classes (:whose-turn app)))}
     (for [i (range (count board))]
       [row {:row-data (board i)
             :row-num i}])]))


(defn history-slider []
  (let [viewing-history @input-locked
        hist @history]
    [:div#history-slider
     [:h3 "History"]
     [:input {:type "range"
              :max (count hist)
              :min 0
              :value (when-not viewing-history (count hist))
              :on-change goto-history}]]))

(defn alert-box []
  (let [aaa @alert-msg]
    [:div#alert {:className (:class aaa)}
     (or (:msg aaa) " ")]))

(defn sidebar []
  [:div [history-slider]
   [alert-box]])



;;;; Go!

(defn ^:export run []
  (cloact/render-component [board] (.getElementById js/document "board-container"))
  (cloact/render-component [sidebar] (.getElementById js/document "sidebar")))
