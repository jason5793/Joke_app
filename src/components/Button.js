import React from 'react'
import "./Button.css"
const Button = (props) => {
  return <button onClick={props.callapi}>Generate a joke </button> 
}

export default Button