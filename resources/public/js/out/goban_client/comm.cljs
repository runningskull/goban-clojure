(ns goban-client.comm
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<! >! chan timeout]]
            [chord.client :refer [ws-ch]]))



;; (defn )

(defn connect-to-server [url]
  (go
   (let [ws (<! (ws-ch "ws://localhost:3000/ws"))]
     (>! ws "Hello, server! (from client)"))))
