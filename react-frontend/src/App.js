import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import { Grid, Typography } from "@material-ui/core";
import Header from "./components/Header";
import About from "./components/About";
import Title from "./components/Title";
import FoundTable from "./components/FoundTable";

class App extends React.Component {
  state = {
    links: [], //scholarships links found
    isFetching: false, //tracks if api is called
  };

  updateFetching = (status) => {
    this.setState({
      isFetching: status,
    });
    console.log(this.state.isFetching);
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
        <Grid container direction="column">
          <Grid container>
            <Grid item xs={1} sm={2} md={3} />
            <Grid item xs={10} sm={8} md={6}>
              <Title />
              <About />
              <Form
                updateResponse={this.updateLinks}
                updateStatus={this.updateFetching}
              />

              <FoundTable
                data={this.state.links}
                status={this.state.isFetching}
              />
            </Grid>
            <Grid item xs={1} sm={2} md={3} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
