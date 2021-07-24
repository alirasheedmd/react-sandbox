import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App.js"
import { Provider } from "react-redux"
import store from "./store.js"

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById("root")
)
