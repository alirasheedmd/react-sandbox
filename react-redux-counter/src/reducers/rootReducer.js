import { combineReducers } from "redux"

const initialCounterState = { counter: 0 }

const initialMultiplyState = { multiply: 5 }

const initialDivideState = { divide: 100 }

const multiplyReducer = (state = initialMultiplyState, action) => {
  switch (action.type) {
    case "DOUBLE":
      return { multiply: state.multiply * 2 }
    default:
      return state
  }
}

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 }
    case "DECREMENT":
      return { counter: state.counter - 1 }
    default:
      return state
  }
}

const divideReducer = (state = initialDivideState, action) => {
  switch (action.type) {
    case "DIVIDE":
      return { divide: state.divide / 2 }
    default:
      return state
  }
}
//Combine Reducer Note:
//When we use combine reducer the state will have objects with different keys. Like we have here multiplyer and counters.
const rootReducer = combineReducers({
  multiplyer: multiplyReducer,
  counters: counterReducer,
  dividers: divideReducer,
})

export default rootReducer
