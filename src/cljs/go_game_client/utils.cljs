(ns go-game-client.utils
  (:require [cljs.reader :as reader])
  (:import [goog.ui IdGenerator]))

(defn guid []
  (.genNextUniqueId (.getInstance IdGenerator)))
