import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";

class App extends React.Component {
  state = {
    links: [],
    isFetching: false,
  };

  updateLinks = (data) => {
    this.setState({
      links: data,
    });
    console.log(this.state.links);
  };

  render() {
    let message;

    if (this.state.links.length > 0) {
      message = this.state.links.map((link, i) => {
        return (
          <div key={`link-${i}`}>
            <a href={link}>{link}</a>
          </div>
        );
      });
    } else {
      message = <div>Api hasn't been called. Submit the form above.</div>;
    }

    return (
      <div className="App">
        <div>
          <Form updateResponse={this.updateLinks} />
        </div>
        <div>{message}</div>
      </div>
    );
  }
}

export default App;
