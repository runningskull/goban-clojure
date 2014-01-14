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

(def place-stone (atom #()))

(def game-state
  (atom {:turn-number 0
         :whose-turn :black
         :ko-history #{}
         :board-size lib/default-board-size
         :board (lib/empty-board lib/default-board-size)}))



;;;; Components

(defn stone [{:keys [color]}]
  [(dom-pieces color)])

(defn point [{:keys [stn row col]}]
  (let [handler @place-stone]
    [:li {:key (guid)
          :className (when stn "occupied")
          :on-click #(handler [col row])}
     (if stn [stone stn] "")]))

(defn row [{:keys [row-data row-num]}]
  [:ul {:key (guid)}
   (for [i (range (count row-data))]
     [point {:stn (row-data i)
             :row row-num
             :col i}])])

(defn alert-box []
  (let [aaa @alert-msg]
    [:div#alert {:className (:class aaa)}
     (or (:msg aaa) " ")]))

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
