
import React from 'react';
import './Button.css';

function NumberButton(props) {
  return (
    <button style={props.numBtn.buttonStyle}>{props.numBtn.text}</button>
  )
}

export default NumberButton;