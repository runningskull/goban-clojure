(defproject goban "0.0.1-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "MIT License"
            :url "http://opensource.org/licenses/MIT"}

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/tools.reader "0.8.2"]

                 ;; CLJ
                 [ring/ring-core "1.2.0"]
                 [compojure "1.1.5"]
                 [cheshire "5.2.0"]

                 ;; CLJS
                 [org.clojure/clojurescript "0.0-2138"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [com.cemerick/piggieback "0.1.2"]
                 [cljs-http "0.1.2"]
                 [cloact "0.1.0"]

                 ;; Both
                 [jarohen/chord "0.2.1"]]

  :main goban-server.core
  ;; :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

  :plugins [[lein-cljsbuild "1.0.0-alpha2"]
            [jarohen/lein-frodo "0.2.0"]
            [lein-pdo "0.1.1"]
            [lein-drip "0.1.1-SNAPSHOT"]]
            ;; [lein-ritz "0.7.0"]]

  :ring {:handler goban-server.core/app
         :auto-reload true}

  ;; :ring {:handler goban-server.core/app
  ;;        :init goban-server.core/init}

  :frodo/config-resource "config.edn"

  :aliases {"server" ["pdo" "frodo"]}

  :source-paths ["src/clj" "src/cljs"]

  :cljsbuild {:crossovers [goban-lib.core]
              :crossovers-path "crossover-cljs"
              :crossover-jar false
              :builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/go.js"
                                   :output-dir "resources/public/js/out"
                                   :preamble ["om/react.js"]
                                   :externs ["om/externs/react.js"]
                                   :optimizations :none
                                   :pretty-print true
                                   :source-map true}}]}
  
  :profiles {:uberjar {:aot :all}})
             ;; :user {:plugins [[lein-drip "0.1.1-SNAPSHOT"]]}})
