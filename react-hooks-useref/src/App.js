import React, { useRef, useState } from "react"

const App = () => {
  const luckyName = useRef("") // this hook takes data from the refrence and saves it in a constant. it is like taking data from the dom.
  const [show, setShow] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    const name = luckyName.current.value
    name === "" ? alert("Kindly enter the name") : setShow(true)
  }

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <div>
          <label htmlFor="luckyName">Enter your Lucky Name</label>
          <br />
          <input type="text" id="LuckyName" ref={luckyName} />
        </div>
        <button>Submit</button>
        <p>{show ? `welcome to the website ${luckyName.current.value}` : ""}</p>
      </form>
    </div>
  )
}

export default App
