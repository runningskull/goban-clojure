(ns goban-server.core
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.response :as resp]
            [clojure.pprint :refer [pprint]]
 
            [clojure.core.async :refer [<! >! close! go go-loop]]
            [chord.http-kit :refer [with-channel]]
            [goban-lib.core :as lib]))



;;;; Server State

(def games (atom {}))



;;;; Client Gameplay Communication

(defn handle-play-turn [[new-state]]
  nil)

(defn listen-to-client [ws]
  (go-loop []
   (let [{str :message} (<! ws)
         msg (read-string str)]
     (println "[INFO] Message received: " msg))))

(defn tell-client! [chan msg & args]
  (println msg)
  (println args)
  (go (>! chan (str (vec (concat [msg] (or args [])))))))

(defn tell-named-client! [game-id player msg [& args]]
  (tell-client! (-> @games game-id :channels player)))



;;;; New Client Connection

(defn- new-game [first-player]
  {:channels {first-player nil}})

(defn vs-socket [req]
  (with-channel req chan
    (let [game-id (-> req :params :game-id)
          player-id (-> req :params :player-id)
          game (@games game-id)
          nplayers (count (keys (:channels game)))]
      (if (<= nplayers 2)
        (do (tell-client! chan :welcome)
            (swap! games assoc-in [game-id :channels player-id] chan)
            )))))


(defn vs-page [req]
  (let [{:keys [player-id game-id]} (:params req)]
    (swap! games assoc game-id (new-game player-id))
    (resp/redirect (str "/play-vs.html#" player-id "@" game-id))))



;;;; Basic Server

(defroutes app-routes
  (GET "/" [] (resp/redirect "/index.html")) 
  (GET "/edit" [] (resp/redirect "/edit.html")) 
  (GET "/game/:game-id/+:player-id" [] vs-page)
  (GET "/vs/:game-id/:player-id" [] vs-socket)
  (route/resources "/")
  (route/not-found "wAt? 0_o"))



(def app
  #'app-routes)
