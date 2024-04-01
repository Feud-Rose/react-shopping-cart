import React from "react";
import ReactDOM from "react-dom/client";

import { useState } from 'react'
import './App.css'

function App() {
  const [userCart, setUserCart] = useState({})

  return (
    <>
      <h1 className="hello">
        Hello
      </h1>
    </>
  )
}

export default App
