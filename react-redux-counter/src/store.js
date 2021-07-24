import rootReducer from "./reducers/rootReducer.js"
import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
