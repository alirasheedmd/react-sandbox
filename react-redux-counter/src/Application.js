import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  IncrementAction,
  DecrementAction,
  Multiply,
  Divide,
} from "./actions/actions.js"

const Application = () => {
  //First we will use useSelector to get the value from the global state to be used in our app
  const counter = useSelector((state) => state.counters.counter)
  const multiplyer = useSelector((state) => state.multiplyer.multiply)
  const divide = useSelector((state)=> state.dividers.divide)
  //Second we will use useDispatch to send the action to reducer it will automatically send the data to reducer as action
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(IncrementAction)}>Increase</button>
      <button onClick={() => dispatch(DecrementAction)}>Decrease</button>
      <h1>{multiplyer}</h1>
      <button onClick={() => dispatch(Multiply)}>Multiply</button>
      <h1>{divide}</h1>
      <button onClick={() => dispatch(Divide)}>Divide</button>
    </div>
  )
}

export default Application
