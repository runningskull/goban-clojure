(ns goban-client.edit
  (:require [goban-client.core :as goban :refer [history
                                                 game-state
                                                 alert-msg]]
            [goban-lib.core :as lib]
            [cloact.core :as cloact :refer [atom]]))


(def app-mode (atom :alternate-moves))
(def input-locked (atom false))



;;;; Change State

(defn goto-history [evt]
  (let [turn (js/parseInt (-> evt .-target .-value))
        hist @history]
    (when (< turn (count hist)) (reset! game-state (hist turn)))
    (reset! input-locked (not= turn (- (count hist) 1)))))

(defn place-stone [[x y :as xy]]
  (when (not @input-locked)
    (let [game-state game-state
          game @game-state
          new-board (lib/place-stone (:board game) (:whose-turn game) xy (:ko-history game))]
      (when new-board
        (swap! game-state assoc :board new-board)
        (when (= :alternate-moves @app-mode)
          (reset! alert-msg {})
          (swap! game-state assoc :whose-turn (lib/next-color (:whose-turn game)))
          (swap! game-state assoc :turn-number (inc (:turn-number game)))
          (swap! game-state assoc :ko-history (conj (:ko-history game)
                                                    (lib/hash-board new-board)))
          ;; TODO: this isn't very efficient
          (swap! history conj @game-state)))
      (when-not new-board
        (reset! alert-msg {:class "err" :msg "Invalid move!"})
        (js/setTimeout #(reset! alert-msg {}) 2000)))))




;;;; Components

(defn history-slider []
  (let [viewing-history @input-locked
        hist @history
        mode @app-mode]
    (if (not= :play-vs mode)
      [:div#history-slider
       [:h3 "History"]
       [:input {:type "range"
                :max (count hist)
                :min 0
                :value (when-not viewing-history (count hist))
                :on-change goto-history}]]
      [:span])))

(defn sidebar []
  [:div
   [history-slider]])



;;;; Go!

(reset! goban/place-stone place-stone)

(defn ^:export run []
  (cloact/render-component [goban/board] (.getElementById js/document "board-container"))
  (cloact/render-component [sidebar] (.getElementById js/document "sidebar")))

