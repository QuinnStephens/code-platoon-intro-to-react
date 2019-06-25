import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={this.props.imageUrl} alt="" />
      </header>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: undefined
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos/1")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          imageUrl: json.url
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Header imageUrl={this.state.imageUrl} />
        <p>I'm text that lives outside the header!</p>
      </div>
    );
  }
}

export default App;
