(ns goban-client.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cloact.core :refer [atom]]
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
(def alert-msg (atom {}))

(def handle-point-click! (atom #()))

(def game-state
  (atom {:turn-number 0
         :whose-turn :black
         :ko-history #{}
         :board-size lib/default-board-size
         :board (lib/empty-board lib/default-board-size)}))



;;;; Change State

(defn reset-history! []
  (swap! game-state assoc :ko-history #{})
  (reset! history []))

(defn show-alert! [class msg & [lifetime]]
  (reset! alert-msg {:class class :msg msg})
  (js/setTimeout #(reset! alert-msg {}) (or lifetime 2000)))

(defn hide-alert! []
  (reset! alert-msg {}))

(defn place-stone! [game-state xy & [next-color]]
  (let [game @game-state
        color (or next-color (lib/next-color (:whose-turn game)))
        new-board (lib/place-stone (:board game) (:whose-turn game) xy (:ko-history game))]
    (when new-board
      (hide-alert!)
      (swap! game-state assoc
             :board new-board
             :whose-turn color
             :turn-number (inc (:turn-number game))
             :ko-history (conj (:ko-history game) (lib/hash-board new-board)))
      (swap! history conj @game-state))
    (when-not new-board
      (show-alert! "err" "Invalid move!"))))


;;;; Components

(defn stone [{:keys [color]}]
  [(dom-pieces color)])

(defn point [{:keys [stn row col]}]
  (let [handler @handle-point-click!]
    [:li {:key (guid)
          :class (when stn "occupied")
          :on-click #(handler [col row])}
     (if stn [stone stn] "")]))

(defn row [{:keys [row-data row-num]}]
  [:ul {:key (guid)}
   (for [i (range (count row-data))]
     [point {:stn (row-data i)
             :row row-num
             :col i}])])

(defn alert-box []
  (let [msg @alert-msg]
    [:div#alert {:className (:class msg)}
     (or (:msg msg) " ")]))

(defn board []
  (let [game @game-state
        board-size (:board-size game)
        board (:board game)]
    [:div
     [alert-box]
     [:div#board {:className (str (dom-board-classes board-size) " "
                                  "turn-" (dom-board-classes (:whose-turn game)))}
      (for [i (range (count board))]
        [row {:row-data (board i)
              :row-num i}])]]))
