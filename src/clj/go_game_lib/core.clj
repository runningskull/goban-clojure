(ns go-game-lib.core
  (:require [clojure.set :refer [union difference intersection]]
            [go-game-cli.core :as cli]))

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
  ([[x y :as xy]] (in-bounds? xy default-board-size))
  ([[x y] board-size]
     (not (or (< x 0) (< y 0) (> x board-size) (> y board-size)))))

(defn get-stone-at-point [board [x y :as xy]]
  (when (in-bounds? (count board) xy)
    ((board y) x)))

(defn occupied? [board [x y :as xy]]
  (not (nil? (get-stone-at-point board xy))))

(defn neighboring-coords [[x y] & [board-size]]
  (filter #(in-bounds? board-size %) [[(- x 1) y] [(+ x 1) y] [x (- y 1)] [x (+ y 1)]]))

(defn neighboring-stones [board [x y :as xy] & [color]]
  (let [stones (filter #(not (nil? %)) (map get-stone-at-point
                                            (neighboring-coords xy (count board))))]
    (if color
      (filter #(= color (% :color)) stones) ;; TODO: more elegant expression?
      stones)))

(defn neighboring-chains [board color [x y :as xy] & [color]]
  (map :chain (neighboring-stones board xy color)))

(defn liberties [board [x y :as xy]]
  (filter #(not (occupied? %)) (neighboring-stones xy (count board))))

(defn new-stone [color & [chain]]
  {:color color :chain chain})



;;;; Chains

(defn blank-chain [board [x y :as xy]]
  {:liberties (set (liberties board xy))
   :points #{xy}})

(defn merge-chains [chains]
  (let [points (union map :points chains)
        liberties (union map :liberties chains)]
    {:points points
     :liberties (difference liberties (intersection points liberties))}))

(defn update-stones-in-chain [board new-chain]
  ;; TODO: - is there a better way to do this than (loop ...) ?
  ;;       - can write a (assoc-in!) function so we can use transients?
  ;;       - optimization: could (rseq) inside loop instead of mapping first
  (loop [new-board board
         affected-points (map rseq (new-chain :points))] ;; [x y] -> [row column]
    (if-not (seq affected-points)
      new-board
      (recur (assoc-in new-board (conj (first affected-points) :chain) new-chain)
             (rest affected-points)))))

(defn merge-neighboring-chains [board [x y :as xy]]
  (let [stone (get-stone-at-point board xy)
        new-chain (merge-chains (conj (neighboring-chains board xy (stone :color))
                                      (stone :chain)))]
    (update-stones-in-chain board new-chain)))

(defn reduce-neighboring-opponent-liberties [board [x y :as new-point]]
  (let [stone (get-stone-at-point board xy)
        chains (neighboring-chains board xy (next-color (stone :color)))])
  ;; TODO: remove xy from all neighboring chains' liberties
  board)



;;;; Gameplay Logic

(defn next-color [color]
  (if (= :black color) :white :black))

;; TODO
(defn valid-move? [board color [x y :as xy]]
  (when (in-bounds? xy (count board))
    true))


(defn put-stone-at-point [board color [x y :as xy]]
  (let [chain (blank-chain board xy)
        stone (new-stone color chain)
        candidate-board (merge-neighboring-chains
                         (assoc-in board [y x] stone) stone xy)]
    (when (valid-move? candidate-board color xy)
      ;; TODO
      ;;  - reduce-neighboring-opponent-liberties
      nil)))


;; TO THINK ABOUT:
;;  - could we recalculate a chain's liberties when we need them
;;    instead of keeping track of them all the time?
;;  - could use some kind of memoing/caching so calculation is not expensive?
;;     - probably not whie maintaining general usefulness of functions
