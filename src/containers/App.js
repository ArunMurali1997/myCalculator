import React, { useState } from "react";
import "./App.css";
import Cockpit from "../components/Cockpit/Cockpit";
import Input from "../components/Cockpit/Input";
import Clear from "../components/Cockpit/Clear";
const App = () => {
  // const obj = {
  //   x: "A",
  //   y: "B",
  //   z: "C",
  // };
  // console.log(obj);
  // const sample = () => {
  //   console.log({ ...obj });
  //   const { x, ...k } = obj;
  //   const y = x + "B";
  //   console.log(k);
  //   console.log(y);
  // };
  // sample();
  // console.log(obj.x);
  const [inputState, setInputState] = useState("");
  const [previousNumber, setPreviousNumber] = useState("");
  const [operator, setOperator] = useState("");
  const addToInput = (val) => setInputState(inputState + val);
  const addZeroToInput = (val) => {
    if (inputState !== "") {
      return setInputState(inputState + val);
    }
  };
  const addToClear = () => setInputState("");
  const addDecimalToIOnput = (val) => {
    if (inputState.indexOf(".") === -1) {
      return setInputState(inputState + val);
    }
  };
  const add = () => {
    setPreviousNumber(inputState);
    setInputState("");
    setOperator("plus");
  };
  const sub = () => {
    setPreviousNumber(inputState);
    setInputState("");
    setOperator("minus");
  };
  const div = () => {
    setPreviousNumber(inputState);
    setInputState("");
    setOperator("divide");
  };
  const mul = () => {
    setPreviousNumber(inputState);
    setInputState("");
    setOperator("multiply");
  };

  const evaluate = () => {
    // eslint-disable-next-line default-case
    switch (operator) {
      case "plus":
        setInputState(parseInt(previousNumber) + parseInt(inputState));
        setOperator("");
        break;
      case "minus":
        setInputState(parseInt(previousNumber) - parseInt(inputState));
        setOperator("");
        break;
      case "divide":
        setInputState(parseInt(previousNumber) / parseInt(inputState));
        setOperator("");
        break;
      case "multiply":
        setInputState(parseInt(previousNumber) * parseInt(inputState));
        setOperator("");
        break;
    }
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="row">
          <Input>{inputState}</Input>
        </div>
        <div className="row">
          <Cockpit handleClick={addToInput}>7</Cockpit>
          <Cockpit handleClick={addToInput}>8</Cockpit>
          <Cockpit handleClick={addToInput}>9</Cockpit>
          <Cockpit handleClick={div}>/</Cockpit>
        </div>
        <div className="row">
          <Cockpit handleClick={addToInput}>4</Cockpit>
          <Cockpit handleClick={addToInput}>5</Cockpit>
          <Cockpit handleClick={addToInput}>6</Cockpit>
          <Cockpit handleClick={mul}>*</Cockpit>
        </div>
        <div className="row">
          <Cockpit handleClick={addToInput}>1</Cockpit>
          <Cockpit handleClick={addToInput}>2</Cockpit>
          <Cockpit handleClick={addToInput}>3</Cockpit>
          <Cockpit handleClick={add}>+</Cockpit>
        </div>

        <div className="row">
          <Cockpit handleClick={addDecimalToIOnput}>.</Cockpit>
          <Cockpit handleClick={addZeroToInput}>0</Cockpit>
          <Cockpit handleClick={evaluate}>=</Cockpit>
          <Cockpit handleClick={sub}>-</Cockpit>
        </div>
        <div className="row">
          <Clear handleClear={addToClear}>Clear</Clear>
        </div>
      </div>
    </div>
  );
};

export default App;
