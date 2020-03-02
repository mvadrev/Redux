import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const logged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      Counter {counter}
      <br />
      <button onClick={() => dispatch(increment())}>+</button>---
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>{logged ? <h3>Logged</h3> : <h3>Not Logged</h3>}</div>
    </div>
  );
}

export default App;
