(ns go-game-lib.core
  (:require [clojure.set :refer [union difference intersection]]
            [go-game-cli.core :as cli]))

(def nil-stone {:color nil
                :chain nil})

(def default-board-size 19)



;;;; Helpers

(defn- not-nil? [x]
  (not (nil? x)))

(defn next-color [color]
  (if (= :black color) :white :black))



;;;; Board Logic

(defn empty-board [& [board-size]]
  (let [size (or board-size default-board-size)]
    (vec (repeat size (vec (repeat size nil))))))

(defn in-bounds?
  ([[x y :as xy]]
     (in-bounds? xy default-board-size))
  ([[x y] board-size]
     (not (or (< x 0) (< y 0) (> x board-size) (> y board-size)))))

(defn get-stone [board [x y :as xy]]
  (when (in-bounds? xy (count board))
    ((board y) x)))

(defn occupied? [board [x y :as xy]]
  (not (nil? (get-stone board xy))))

(defn neighboring-coords [[x y] & [board-size]]
  (filter #(in-bounds? % (or board-size default-board-size))
          [[(- x 1) y] [(+ x 1) y] [x (- y 1)] [x (+ y 1)]]))

(defn neighboring-stones [board [x y :as xy] & [color]]
  (let [stones (filter #(not (nil? %)) (map #(get-stone board %)
                                            (neighboring-coords xy (count board))))]
    (if color
      (filter #(= color (% :color)) stones) ;; TODO: more elegant expression?
      stones)))

(defn neighboring-chains [board [x y :as xy] & [color]]
  (map :chain (neighboring-stones board xy color)))

(defn liberties [board [x y :as xy]]
  (filter #(not (occupied? board %)) (neighboring-coords xy (count board))))

(defn new-stone [color & [chain]]
  {:color color :chain chain})

(defn update-stones [board points-yx update]
  (loop [new-board board
         remaining-points points-yx]
    (if-not (seq remaining-points)
      new-board
      (recur (assoc-in new-board (first remaining-points) update)
             (rest remaining-points)))))

(defn remove-stones [board points]
  (update-stones board (mapv vec (map rseq points)) nil))



;;;; Chains

(defn blank-chain [[x y :as xy]]
  {:points #{xy}})

(defn chain-liberties [board chain]
  (set (apply concat (map #(liberties board %) (:points chain)))))

(defn merge-chains [chains]
  {:points (apply union (map :points chains))})

(defn update-chained-stones [board new-chain]
  (let [affected-points (mapv #(conj % :chain)
                              (mapv vec (mapv rseq (:points new-chain))))]
    (update-stones board affected-points new-chain)))

(defn merge-neighboring-chains [board [x y :as xy]]
  (let [stone (get-stone board xy)
        new-chain (merge-chains (conj (neighboring-chains board xy (:color stone))
                                      (:chain stone)))]
    (update-chained-stones board new-chain)))

(defn remove-captured-chains [board [x y :as placed-point]]
  (let [stone (get-stone board placed-point)
        captured-color (next-color (:color stone))
        neighbors (neighboring-chains board placed-point captured-color)
        surrounded-neighbors (filter #(= 0 (count (chain-liberties board %)))
                                     neighbors)
        removed-points (:points (merge-chains surrounded-neighbors))]
    (remove-stones board removed-points)))



;;;; Gameplay Logic

(defn results-in-suicide? [board [x y :as xy]]
  (> 0 (count (chain-liberties board (:chain (get-stone board xy))))))

(defn valid-move? [old-board new-board [x y :as xy]]
  (when (and (in-bounds? xy (count new-board))
             (not (occupied? old-board xy))
             (not (results-in-suicide? new-board xy)))
    true))

(defn put-stone-at-point [board color [x y :as xy]]
  (let [chain (blank-chain xy)
        stone (new-stone color chain)
        candidate-board (merge-neighboring-chains
                         (assoc-in board [y x] stone) xy)]
    (when (valid-move? board candidate-board xy)
      (remove-captured-chains candidate-board xy))))



;;;; Testing CLI

(defn- cli-parse-user-coords [input]
  (vec (map #(Integer/parseInt %) (clojure.string/split input #"-"))))

(defn cli-place-stones [board color]
  (println (cli/print-board board))
  (let [input (read-line)]
    (cond
     (= "stop" input) (println "G'bye!")
     (= "board" input) (do (println board) (recur board color))

     :else (let [coords (cli-parse-user-coords input)
                 new-board (put-stone-at-point board color coords)]
             (if new-board
               (recur new-board (next-color color))
               (recur board color))))))

(cli-place-stones (empty-board) :black)


;; TODO: lets you commit suicide
