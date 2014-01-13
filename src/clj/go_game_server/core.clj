(ns go-game-server.core
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [compojure.core :refer [GET POST defroutes]]
            [ring.util.response :as resp]
            [cheshire.core :as json]
            [clojure.core.async :refer [<! >! close! go go-loop]]
            [chord.http-kit :refer [with-channel]]
            [clojure.java.io :as io]))



;;;; THIS DOESN'T DO ANYTHING RIGHT NOW


(def comments (atom []))

(defn json-response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/json"}
   :body (json/generate-string data)})


(defn ws-handler [req]
  (with-channel req ws
    (println "Opened websocket connection from " (req :remote-addr))
    (go-loop []
             (when-let [{:keys [message]} (<! ws)]
               (println "Message received: " message)
               (>! ws (format "You said: '%s' at %s" message (java.util.Date.)))
               (recur)))))


(defroutes app-routes
  (GET "/" [] (resp/redirect "/index.html"))
  (GET "/ws" [] ws-handler)
  (route/resources "/")
  (route/not-found "Page not found"))



(def app
  (-> #'app-routes
      (handler/api)))
