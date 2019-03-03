import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <input type="text" onChange={this.props.onUpdateText} />
        </form>
        <button onClick={this.props.onClickButton}>Submit</button>
      </header>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <div className="App">
        <Header
          onUpdateText={event => {
            this.setState({ input: event.target.value });
          }}
          onClickButton={() => alert(this.state.input)}
        />
        <p>I'm text that lives outside the header!</p>
      </div>
    );
  }
}

export default App;
