(ns goban-client.comm
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [<! >! chan timeout]]
            [cljs.reader :refer [read-string]]
            [chord.client :refer [ws-ch]]))


(defn- prnt [& args]
  (prn (apply str (interpose " " args))))

(defn connect-to-server [url handlers]
  (go
   (let [ws (<! (ws-ch url))
         {msg :message} (<! ws)
         cmd (read-string msg)]
     (prn "    << Server says " msg " >>")
     ((handlers (first cmd)) (rest cmd)))))
