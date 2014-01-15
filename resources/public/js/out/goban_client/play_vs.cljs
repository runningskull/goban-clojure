(ns goban-client.play-vs
  (:require [goban-client.comm :as comm]
            [goban-lib.core :as lib]
            [cloact.core :as cloact :refer [atom]]
            [goban-client.core :as goban :refer [history
                                                 game-state
                                                 alert-msg]]))

(def input-locked (atom false))
(def my-color (atom :black))
(def chat-messages (atom []))



;;;; Change State

(defn- place-stone-in-game [game xy]
  (let [shiner (lib/place-stone (:board game) (:whose-turn game) xy (:ko-history game))]
    shiner))

(defn- finalize-move! [game new-board]
  (swap! game-state assoc
         :board new-board
         :whose-turn (lib/next-color (:whose-turn game))
         :turn-number (inc (:turn-number game))
         :ko-history (conj (:ko-history game) (lib/hash-board new-board))))

(defn place-stone [[x y :as xy]]
  (let [game @game-state]
    (when (= @my-color (:whose-turn game))
      (let [new-board (place-stone-in-game game xy)]
        (when new-board
          (reset! alert-msg {})
          (finalize-move! game new-board)
          (swap! history conj @game-state))
        (when-not new-board
          (reset! alert-msg {:class "err" :msg "Invalid move!"})
          (js/setTimeout #(reset! alert-msg {}) 2000))))))

(defn submit-chat-msg [evt]
  (.preventDefault evt))



;;;; Components

(defn whose-turn-sign []
  (let [turn (:whose-turn @game-state)
        class (if (= turn @my-color) "mine" "opponent")]
    [:div#whose-turn {:class class}]))

(defn chat-pane []
  (let [message @chat-messages]
    [:form.chat {:on-submit submit-chat-msg}
     [:h2 "Chat..."]
     [:ol.log
      [:li "testing message one"]
      [:li.opponent "testing message one"]
      [:li "testing message one"]
      [:li.opponent "testing message one"]
      [:li "testing message one"]
      [:li.opponent "testing message one"]
      [:li.opponent "testing message one"]
      [:li "testing message one"]
      [:li "testing imessage 2"]]
     [:input {:type "text" :placeholder "Type message here"}]
     [:input {:type "submit"}]]))

(defn scoreboard []
  [:div#scoreboard
   [:div.label "Score:"]
   [:div.black "1"]
   [:div.white "2"]])

(defn sidebar []
  [:div
   [whose-turn-sign]
   [scoreboard]
   [chat-pane]])




;;;; Go!

(reset! goban/place-stone place-stone)

(defn ^:export run []
  (cloact/render-component [goban/board] (.getElementById js/document "board-container"))
  (cloact/render-component [sidebar] (.getElementById js/document "sidebar")))
