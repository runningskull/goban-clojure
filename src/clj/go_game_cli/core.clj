(ns go-game-cli.core)

(def CLI-PIECES {:black "O"
                :white "#"})

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
