import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Header extends Component {
  render() {
    const text = "I am a text variable!";

    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{text}</p>
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>I'm text that lives outside the header!</p>
      </div>
    );
  }
}

export default App;
