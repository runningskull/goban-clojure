(ns goban-client.play-vs
  (:require [goban-client.comm :as comm]
            [goban-lib.core :as lib]
            [cloact.core :as cloact :refer [atom]]
            [goban-client.core :as goban :refer [history
                                                 game-state
                                                 hide-alert!
                                                 show-alert!]]))


(def input-locked (atom true))
(def my-color (atom nil))
(def chat-messages (atom []))
(def connected (atom false))



;;;; Change State

(defn place-stone! [[x y :as xy]]
  (goban/place-stone! game-state xy))

(defn send-chat-msg! [evt]
  (.preventDefault evt))



;;;; Server Message Handlers

(defn handle-welcome []
  (show-alert! "success" "Welcome to the game")
  (prn "WELCOMED")
  (reset! connected true))

(defn handle-game-start [[color]]
  (reset! my-color color))

(defn handle-opponent-move [[x y :as xy]]
  (place-stone! xy))



;;;; DOM Event Handlers

(defn handle-point-click! [[x y :as xy]]
  (when (= @my-color (:whose-turn @game-state))
    (place-stone! xy)))



;;;; Components

(defn username-form []
  (let [connected? @connected]
    [:form#username-form
     {:on-submit connect
      :style (when connected? {:display "none"})
      :autoComplete "off"}
     [:h4 "What's your name?"]
     [:input#username {:type "text" :autoFocus true}]
     [:a.submit "Connect"]]))

(defn whose-turn-sign []
  (let [turn (:whose-turn @game-state)
        class (if (= turn @my-color) "mine" "opponent")]
    [:div#whose-turn {:class class}]))

(defn chat-pane []
  (let [message @chat-messages]
    [:form.chat {:on-submit send-chat-msg!}
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
   ;; [username-form]
   (when @connected
     [whose-turn-sign]
     [scoreboard]
     [chat-pane])])

(defn container []
  [:div#vs-container {:class (when-not @connected "disconnected")}
   [:div#board-container
    (when @connected
      [goban/board])]
   [:div#sidebar [sidebar]]])




;;;; Go!


;; Hacky... kill it (with fire) at some point
(reset! goban/handle-point-click! handle-point-click!)

(defn connect []
  (let [[player-id game-id] (clojure.string/split
                             (subs (.-hash js/location) 1) #"@")]
    (prn "GAMEID" game-id)
    (comm/connect-to-server
     (str "ws://localhost:3000/vs/" game-id "/" player-id)
     {:welcome handle-welcome
      :game-start handle-game-start
      :nil prn})))

(defn render []
  (cloact/render-component [container] (.-body js/document)))

(defn ^:export run []
  (connect)
  (render))
