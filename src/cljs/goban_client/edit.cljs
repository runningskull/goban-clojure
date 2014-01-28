(ns goban-client.edit
  (:require [goban-client.core :as goban :refer [history
                                                 game-state
                                                 show-alert!
                                                 hide-alert!]]
            [goban-lib.core :as lib]
            [cloact.core :as cloact :refer [atom]]))


(def placement-mode (atom :alternate-moves))
(def input-locked (atom false))

(def mode-labels {:alternate-moves "Alternate"
                  :black "Black Only"
                  :white "White Only"})


;;;; Change State

(defn goto-history [evt]
  (let [turn (js/parseInt (-> evt .-target .-value))
        hist @history]
    (when (< turn (count hist)) (reset! game-state (hist turn)))
    (reset! input-locked (not= turn (- (count hist) 1)))))

(defn place-stone! [[x y :as xy]]
  (when-not @input-locked
    (let [game @game-state
          mode @placement-mode
          next-color (when-not (= mode :alternate-moves) mode)
          new-board (goban/place-stone! game-state xy next-color)]
      new-board)))

(defn undo-last-move [evt]
  (.preventDefault evt)
  (when (not @input-locked)
    (let [hist @history
          game @game-state]
      (swap! history pop)
      (reset! game-state (last (pop hist))))))

(defn clear-history [evt]
  (.preventDefault evt)
  (when (js/confirm "Really clear history?")
    (goban/reset-history!)))

(defn switch-modes [new-mode evt]
  (reset! placement-mode new-mode)
  (when-not (= new-mode :alternate-moves)
    (swap! game-state assoc :whose-turn new-mode)))




;;;; Components

(defn history-slider []
  (let [viewing-history @input-locked
        hist @history
        mode @placement-mode]
    (if (not= :play-vs mode)
      [:div#history-slider
       [:h3 "History"]
       [:input {:type "range"
                :max (count hist)
                :min 0
                :value (when-not viewing-history (count hist))
                :on-change goto-history}]]
      [:span])))

(defn history-buttons []
  [:div#history-buttons
   [:a.undo {:href "#"
             :on-click undo-last-move} "↩ Undo"]
   [:a.clear {:href "#"
              :on-click clear-history} "× Clear"]])

(defn mode-switcher []
  (let [mode @placement-mode]
    [:div#mode-switcher
     (for [m (keys mode-labels)]
       [:div
        [:input {:type "radio"
                 :name "placement-mode"
                 :id (str "ms-" m)
                 :on-click #(switch-modes m %)
                 :checked (= mode m)}]
        [:label {:for (str "ms-" m)} (mode-labels m)]])]))

(defn sidebar []
  [:div
   [history-slider]
   [history-buttons]
   [mode-switcher]])



;;;; Go!

(reset! goban/handle-point-click! place-stone!)

(defn ^:export run []
  (cloact/render-component [goban/board] (.getElementById js/document "board-container"))
  (cloact/render-component [sidebar] (.getElementById js/document "sidebar")))

