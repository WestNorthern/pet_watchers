# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"

pin "htm", to: "https://cdn.esm.sh/v45/htm@3.1.0/es2021/htm.js"
# pin "react", to: "https://cdn.esm.sh/v45/react@17.0.2/es2021/react.js"
# pin "react-dom", to: "https://cdn.esm.sh/v45/react-dom@17.0.2/es2021/react-dom.js"
# pin_all_from "app/javascript/components", under: "components"

pin "react", to: "https://cdn.esm.sh/react@17.0.2"
pin "react-dom", to: "https://cdn.esm.sh/react-dom@17.0.2"
pin_all_from "app/javascript/components", under: "components"

