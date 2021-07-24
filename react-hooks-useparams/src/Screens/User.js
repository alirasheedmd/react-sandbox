import React from "react"
import { useParams } from "react-router"

const User = () => {
  const { username, details } = useParams()

  return (
    <div>
      <h1>My Name is {username}</h1>
      <h1>My last name is {details}</h1>
    </div>
  )
}

export default User
