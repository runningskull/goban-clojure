(ns goban-client.comm
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [<! >! chan timeout]]
            [cljs.reader :refer [read-string]]
            [chord.client :refer [ws-ch]]))

(def channel (atom nil))

(defn- listen-to-server [chan handlers]
  (go
   (let [{str :message} (<! chan)
         msg (read-string str)]
     ((handlers (first msg)) (rest msg)))))

(defn connect-to-server [url handlers]
  (go
   (let [chan (<! (ws-ch url))]
     (reset! channel chan)
     (listen-to-server chan handlers))))

(defn tell-server [msg]
  (go
   (>! @channel msg)))
