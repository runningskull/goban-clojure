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
(def connected (atom false))



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



;;;; DOM Event Handlers

(defn connect [evt]
  (.preventDefault evt)
  (let [username (.getElementById js/document "username")]
    (comm/connect-to-server
     "ws://localhost:3000/ws"
     {:welcome handle-welcome
      :nil prn})))



;;;; Components

(defn username-form []
  (let [connected? @connected]
    [:form#username-form
     {:on-submit connect
      :style (when connected? {:display "none"})}
     [:h4 "Enter a username:"]
     [:input#username {:type "text"}]
     [:input {:type "submit" :value "Connect"}]]))

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
   [username-form]
   (when @connected
     [whose-turn-sign]
     [scoreboard]
     [chat-pane])])

(defn container []
  [:div
   [:div#board-container
    (when @connected
      [goban/board])]
   [:div#sidebar [sidebar]]])



;;;; Server Message Handlers

(defn handle-welcome []
  (prn "Welcomed by server")
  (reset! connected true))




;;;; Go!


;; Stateful... KILL IT WITH FIRE at some point
(reset! goban/place-stone place-stone)

(defn render []
  (cloact/render-component [container] (.-body js/document)))

(defn ^:export run []
  (render))
