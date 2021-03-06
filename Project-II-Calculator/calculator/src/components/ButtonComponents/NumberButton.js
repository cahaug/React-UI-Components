import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <button style={props.numBtn.buttonStyle} key={props.numBtn.id}>{props.numBtn.text}</button>
  )
}

export default NumberButton;