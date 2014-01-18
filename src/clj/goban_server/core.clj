(ns goban-server.core
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.response :as resp]
            [clojure.pprint :refer [pprint]]
            [cheshire.core :as json]
            [clojure.core.async :refer [<! >! close! go go-loop]]
            [chord.http-kit :refer [with-channel]]
            [clojure.java.io :as io]))


(def connected (atom false))
(def comments (atom []))

(defn ws-handler [req]
  (with-channel req ws
    (println "GOT A CONNECTION!")
    (go-loop
     []
     (>! ws (str [:welcome]))
     (when-let [{:keys [message]} (<! ws)]
       (println "Message received: " message)
       (>! ws (str [:nil]))
       (recur)))))

(defroutes app-routes
  (GET "/" [] (resp/redirect "/index.html")) 
  (GET "/edit" [] resp/redirect "/edit.html") 
  (GET "/play-vs" [] resp/redirect "/play-vs.html")
  (GET "/ws" [] ws-handler)
  (route/resources "/")
  (route/not-found "wAt? 0_o"))



(def app
  #'app-routes)
