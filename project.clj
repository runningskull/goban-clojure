(defproject go-game-client "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/tools.reader "0.8.2"]

                 ;; CLJ
                 [ring/ring-core "1.2.0"]
                 [compojure "1.1.6"]
                 [cheshire "5.2.0"]

                 ;; CLJS
                 [org.clojure/clojurescript "0.0-2138"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [com.cemerick/piggieback "0.1.2"]
                 [hickory "0.5.1"]
                 [cljs-http "0.1.2"]
                 [om "0.1.4"]
                 [sablono "0.1.5"]

                 ;; Both
                 [jarohen/chord "0.2.2"]]

  :main go-game-server.core
  ;; :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

  :plugins [[lein-cljsbuild "1.0.0-alpha2"]
            [lein-ring "0.8.7"]
            [lein-pdo "0.1.1"]
            [lein-ritz "0.7.0"]]

  :ring {:handler go-game-server.core/app
         :init go-game-server.core/init}

  :source-paths ["src/clj" "src/cljs"]

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/go.js"
                                   :output-dir "resources/public/js/out"
                                   :preamble ["om/react.js"]
                                   :externs ["om/externs/react.js"]
                                   :optimizations :none
                                   :pretty-print true
                                   :source-map true}}]}
  
  :profiles {:uberjar {:aot :all}
                                        ;; :dev {:plugins [[com.cemerick/austin "0.1.3"]]}
             })
