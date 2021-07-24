import React, { Component } from 'react'
import './App.css';
import Navbar from './components/layout/Navbar'

class App extends Component{
  render(){
    return (
      <div>
      <Navbar />
      <h1>Hello World</h1>
      </div>
    )
  }
}

export default App