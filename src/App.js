import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.props.text}</p>
        <button onClick={this.props.onClickButton}>Click me!</button>
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          text="I am a text variable!"
          onClickButton={() => alert("Button clicked!")}
        />
        <p>I'm text that lives outside the header!</p>
      </div>
    );
  }
}

export default App;
