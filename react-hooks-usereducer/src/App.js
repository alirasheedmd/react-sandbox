import React, { useReducer } from "react"

const App = () => {
  // const [count, setCount] = useState(0)
  const INCREMENT = "INCREMENT"
  const DECREMENT = "DECREMENT"

  const initialState = 0

  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT:
        return state + 1
      case DECREMENT:
        return state - 1
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  const incrementHandler = () => {
    dispatch({ type: INCREMENT })
  }

  const decrementHandler = () => {
    dispatch({ type: DECREMENT })
  }

  return (
    <div>
      <p>{state}</p>
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
    </div>
  )
}

export default App
