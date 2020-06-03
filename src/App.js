import React, { Component } from "react";
import Decrement from "./Decrement";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <h3>Click to increment or decrement the numbers:</h3>
        <Decrement start={10} />
        <div class="divider2"/>
        <Decrement start={15} />
        <div class="divider2"/>
        <Decrement start={50} />
        <div class="divider2"/>
      </>
    );
  }
}

export default App;
