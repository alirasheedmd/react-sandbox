import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Link to={`/user/ali/rasheed`}>Go to User</Link>
    </div>
  )
}

export default Home
