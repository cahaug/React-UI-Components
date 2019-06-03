
import React from 'react';
import './Button.css';

function ActionButton(props) {
  return <button className="action-btn">{`${props.actBtn.text}`}</button>
}

export default ActionButton;