(ns go-game-lib.core
  (:require [go-game-cli.core :as cli]))

(def nil-stone {:color nil
                :chain nil})

(def default-board-size 19)



;;;; Helpers

(defn- not-nil? [x]
  (not (nil? x)))



;;;; Board Logic

(defn empty-board [& [board-size]]
  (let [size (or board-size default-board-size)]
    (vec (repeat size (vec (repeat size nil))))))

(defn in-bounds?
  ([[x y]] (in-bounds? [x y] default-board-size))
  ([[x y] board-size]
     (not (or (< x 0) (< y 0) (> x board-size) (> y board-size)))))

(defn get-stone-at-point [board [x y]]
  (when (in-bounds? (count board) [x y])
    ((board y) x)))

(defn occupied? [board [x y]]
  (not (nil? (get-stone-at-point board [x y]))))

(defn neighboring-coords [[x y] & [board-size]]
  (filter #(in-bounds? board-size %) [[(- x 1) y] [(+ x 1) y] [x (- y 1)] [x (+ y 1)]]))

(defn neighboring-stones [board [x y]]
  (filter #(not (nil? %))
          (map get-stone-at-point (neighboring-coords [x y] (count board)))))

(defn liberties [board [x y]]
  (filter #(not (occupied? %)) (neighboring-stones [x y] (count board))))

(defn new-stone [board color [x y]]
  ;; TODO:
  ;;   - check attach to neighboring chain
  ;;   - if multiple neighboring chains, merge them
  (let [neighbors (neighboring-stones board [x y])
        neighboring-chains (map :chain neighbors)]
    {:color color :chain nil}))



;;;; Chains

(defn blank-chain [board stone [x y]]
  (let [chain {:liberties (liberties board [x y])
               :points #{[x y]}}]
    (assoc stone :chain chain)))

;; (defn add-stone-to-chain [stone chain [x y]]
;;   (let new-chain ))



;;;; Gameplay Logic

(defn next-color [color]
  (if (= :black color) :white :black))

;; TODO
(defn valid-move? [board color [x y]]
  true)

(defn put-stone-at-point [board color [x y]]
  (when (and (in-bounds? [x y] (count board))
             (valid-move? board color [x y]))
    (assoc-in board [y x] (new-stone board color [x y]))))
