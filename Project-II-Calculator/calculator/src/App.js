import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const numBtns = [
  {
    text: "0",
    id:"0",
    buttonStyle: {
      width: "100%"
    }
  },
  {
    text: "1",
    id:"1",
    buttonStyle: {
      width: "33.33%"
    }
  },
  {
    text: "2",
    id:"2",
    buttonStyle: {
      width: "33.33%"
    }
  },
  {
    text: "3",
    id:"3",
    buttonStyle: {
      width: "33.33%"
    }
  },
  {
    text: "4",
    id:"4",
    buttonStyle: {
      width: "33.33%"
    }
  },
  {
    text: "5",
    id:"5",
    buttonStyle: {
      width: "33.33%"
    }
  },
  {
    text: "6",
    id:"6",
    buttonStyle: {
      width: "33.33%"
    }
  },
  {
    text: "7",
    id:"7",
    buttonStyle: {
      width: "33.33%"
    }
  },
  {
    text: "8",
    id:"8",
    buttonStyle: {
      width: "33.33%"
    }
  },
  {
    text: "9",
    id:"9",
    buttonStyle: {
      width: "33.33%"
    }
  },
  {
    text: "Clear",
    id:"clr",
    buttonStyle: {
      width: "100%",
      fontWeight: 500,
    }
  }
]

const actBtns = [
  {
    text: "÷",
    id:"div",
  },
  {
    text: "×",
    id:"mult",
  },
  {
    text: "−",
    id:"sub"
  },
  {
    text: "+",
    id:"add"
  },
  {
    text: "=",
    id:"eql"
  }
]


const App = () => {
  return (
    <div >
      <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>

      <div>
        <div className="container">
          <header className="display">
            <CalculatorDisplay />
          </header>
          <aside className="sidebar">
            {actBtns.map(btn => {return <ActionButton actBtn={btn} />;})}
          </aside>
          <section className="main">
            {numBtns.map(btn => {
              return <NumberButton numBtn={btn} />;
            })}
          </section>
        </div>
      </div>

    </div>
  );
};

export default App;
