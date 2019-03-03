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
  constructor(props) {
    super(props);

    this.state = {
      clickCount: 0
    };
  }

  render() {
    return (
      <div className="App">
        <Header
          text={`Click count: ${this.state.clickCount}`}
          onClickButton={() =>
            this.setState({ clickCount: this.state.clickCount + 1 })
          }
        />
        <p>I'm text that lives outside the header!</p>
      </div>
    );
  }
}

export default App;
