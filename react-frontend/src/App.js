import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";

class App extends React.Component {
  state = {
    links: [],
  };

  updateLinks = (data) => {
    this.setState({
      links: data,
    });
    console.log(this.state.links);
  };

  render() {
    return (
      <div className="App">
        <div>
          <Form updateResponse={this.updateLinks} />
        </div>
        <div>
          {this.state.links.length > 0 ? (
            <div>{this.state.links}</div>
          ) : (
            <div>Api has not been fetched</div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
