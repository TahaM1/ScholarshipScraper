import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import AboutCard from "./components/AboutCard";

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
        <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>
          <Grid container>
            <Grid item xs={0} sm={2} md={3} />
            <Grid item xs={12} sm={8} md={6}>
              <AboutCard />
            </Grid>
            <Grid item xs={0} sm={2} md={3} />
          </Grid>
        </Grid>

        <div>
          <Form updateResponse={this.updateLinks} />
        </div>
        <div>{message}</div>
      </div>
    );
  }
}

export default App;
