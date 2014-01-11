(ns go-game-cli.core
  (:require [go-game-lib.core :as goban]))

(def CLI-PIECES {:black "O"
                :white "@"})



;;;; Output

(defn- print-cli-stone [stone]
  (str " " (if (nil? stone) "." (CLI-PIECES (stone :color)))))

(defn- print-row [row]
  (interpose " " (map print-cli-stone row)))

(defn- print-cli-row [index row]
  (apply str (format "%3d" index) "  " (print-row row)))

(defn print-board [board]
  (apply str
         "     "
         (apply str (interpose " " (map #(format "%2d" %) (range (count board)))))
         \newline
         (interpose \newline (map-indexed print-cli-row board))))



;;;; Input

(defn- parse-user-coords [input]
  (vec (map #(Integer/parseInt %) (clojure.string/split input #"[-=/ ,]"))))

(defn- prompt [color]
  (str (clojure.string/capitalize
        (clojure.string/replace (str color) #":" ""))
       " " (CLI-PIECES color)
       " -- Make a move:"))

(defn take-turns [board color]
  (println (print-board board))
  (println \newline (prompt color))
  (let [input (read-line)]
    (cond
     (= "stop" input) (println "G'bye!")
     (= "board" input) (do (println board) (recur board color))

     :else (let [coords (parse-user-coords input)
                 new-board (goban/put-stone-at-point board color coords)]
             (if new-board
               (recur new-board (goban/next-color color))
               (recur board color))))))
