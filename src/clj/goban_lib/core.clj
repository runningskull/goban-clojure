(ns goban-lib.core
  (:require [clojure.set :refer [union]]))


(def default-board-size 19)



;;;; Helpers

(defn- xy->yx [points]
  (mapv vec (map rseq points)))

(defn next-color [color]
  (if (= :black color) :white :black))

(defn hash-board [board]
  (hash (map #(map :color %) board)))




;;;; Board Logic

(defn empty-board [& [board-size]]
  (let [size (or board-size default-board-size)]
    (vec (repeat size (vec (repeat size nil))))))

(defn new-stone [color & [chain]]
  {:color color :chain chain})


;; info about a given point

(defn in-bounds? [[x y] board-size]
  (let [size (- (or board-size default-board-size) 1)]
    (not (or (< x 0) (< y 0) (> x size) (> y size)))))

(defn get-stone [board [x y :as xy]]
  (when (in-bounds? xy (count board))
    ((board y) x)))

(defn occupied? [board [x y :as xy]]
  (not (nil? (get-stone board xy))))


;; info about points around a given point

(defn neighboring-coords [[x y] & [board-size]]
  (filter #(in-bounds? % board-size)
          [[(- x 1) y] [(+ x 1) y] [x (- y 1)] [x (+ y 1)]]))

(defn neighboring-stones [board [x y :as xy] & [color]]
  (let [stones (filter #(not (nil? %))
                       (map #(get-stone board %)
                            (neighboring-coords xy (count board))))]
    (if color
      (filter #(= color (:color %)) stones) ;; TODO: more elegant expression?
      stones)))

(defn neighboring-chains [board [x y :as xy] & [color]]
  (map :chain (neighboring-stones board xy color)))

(defn liberties [board [x y :as xy]]
  (filter #(not (occupied? board %)) (neighboring-coords xy (count board))))




;;;; Bulk Updates

(defn update-stones [board points-yx update]
  (loop [new-board board
         remaining-points points-yx]
    (if-not (seq remaining-points)
      new-board
      (recur (assoc-in new-board (first remaining-points) update)
             (rest remaining-points)))))

(defn remove-stones [board points]
  (update-stones board (xy->yx points) nil))

(defn update-chained-stones [board new-chain]
  (let [affected-points (mapv #(conj % :chain) (xy->yx (:points new-chain)))]
    (update-stones board affected-points new-chain)))




;;;; Chains

(defn blank-chain [[x y :as xy]]
  {:points #{xy}})

(defn chain-liberties [board chain]
  (set (apply concat (map #(liberties board %)
                          (:points chain)))))

(defn merge-chains [chains]
  {:points (apply union (map :points chains))})

(defn dead? [board chain]
  (not (seq (chain-liberties board chain))))

(defn captured-points [board [x y :as placed-point]]
  (let [captured-color (next-color (:color (get-stone board placed-point)))]
    (:points (merge-chains
              (filter #(dead? board %)
                      (neighboring-chains board placed-point captured-color))))))


;; Update chains after a move is made

(defn merge-neighboring-chains [board [x y :as xy]]
  (let [stone (get-stone board xy)
        new-chain (merge-chains (conj (neighboring-chains board xy (:color stone))
                                      (:chain stone)))]
    (update-chained-stones board new-chain)))

(defn remove-captured-chains [board [x y :as placed-point]]
  (remove-stones board (captured-points board placed-point)))



;;;; Gameplay Logic

(defn move-captures? [new-board [x y :as xy]]
  (> (count (captured-points new-board xy)) 0))

(defn move-suicides? [new-board [x y :as xy]]
  (dead? new-board (:chain (get-stone new-board xy))))

(defn repeats-position? [new-board ko-history]
  (when ko-history
    (contains? ko-history (hash-board new-board))))

(defn valid-move? [old-board new-board [x y :as xy] & [ko-history]]
  (when (and (in-bounds? xy (count new-board))
             (not (occupied? old-board xy))
             (not (repeats-position? new-board ko-history))
             (or (not (move-suicides? new-board xy))
                 (move-captures? new-board xy)))
    true))

(defn place-stone [board color [x y :as xy] & [ko-history]]
  (let [stone (new-stone color (blank-chain xy))
        candidate-board (remove-captured-chains
                         (merge-neighboring-chains
                          (assoc-in board [y x] stone) xy) xy)]
    (when (valid-move? board candidate-board xy ko-history)
      candidate-board)))

;; TODO
(defn winner [board]
  nil)



;; TODO:
;;  - doesn't allow pass/resign

