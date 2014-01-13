(ns goban-cli.core
  (:require [goban-lib.core :as goban]))

(def CLI-PIECES {:black "O"
                :white "@"})

(def separators #"[-=/ ,]")
(def coord-re (re-pattern (str "\\d+" separators "\\d+")))



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
  (vec (map #(Integer/parseInt %) (clojure.string/split input separators))))

(defn- prompt [color]
  (str (clojure.string/capitalize
        (clojure.string/replace (str color) #":" ""))
       " " (CLI-PIECES color)
       " -- Make a move:"))

(defn take-turns [board color & [ko-history]]
  (println (print-board board))
  (println \newline (prompt color))
  (let [history (or ko-history #{})
        input (read-line)]
    (cond
     (= "stop" input) (println "G'bye!")
     (= "board" input) (do (println board) (recur board color [history]))
     (= "hash" input) (do (println (goban/hash-board board)) (recur board color [history]))
     (= "history" input) (do (println history) (recur board color [history]))

     (re-matches coord-re input)
     (let [coords (parse-user-coords input)
           new-board (goban/place-stone board color coords history)]
       (if-not new-board
         (do (println \newline "INVALID MOVE" \newline)
             (recur board color [history]))
         (recur new-board
                (goban/next-color color)
                [(conj history (goban/hash-board new-board))])))

     :else (do (println \newline "### I don't understand that input ###" \newline)
               (recur board color [history])))))

