import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {this.props.showCongrats && (
          <h1>Congratulations! You submitted text!</h1>
        )}
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
      input: "",
      submitted: false
    };
  }

  render() {
    return (
      <div className="App">
        <Header
          showCongrats={this.state.submitted && this.state.input.length > 0}
          onUpdateText={event => {
            this.setState({ input: event.target.value });
          }}
          onClickButton={() => this.setState({ submitted: true })}
        />
        <p>I'm text that lives outside the header!</p>
      </div>
    );
  }
}

export default App;
