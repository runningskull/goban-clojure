(ns go-game-client.app
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<! >! chan timeout]]
            [chord.client :refer [ws-ch]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]
            [go-game-client.utils :refer [guid]]
            [go-game-lib.core :as lib]))

(enable-console-print!)



;;;; Utils

(defn- debugger! []
  (js* "debugger"))

(defn -with-id [hmap]
  (assoc hmap :id (guid)))



;;;; Application

(def default-board-size 19)

(def app-state
  (atom {:turn-number 0
         :whose-turn :black
         :board-size default-board-size
         :board (lib/empty-board default-board-size)}))



;;;; Components

(defn point [{:keys [color]} owner opts]
  (om/component
   (html [:li {:className (str color)}])))

(defn board [app owner opts]
  (om/component
   (html [:div#board])))



;;;; Go!

(defn go-game-app [app owner]
  (om/component
   (om/build board app {:opts {:board-size 19}})))

(om/root app-state go-game-app (.getElementById js/document "go"))
