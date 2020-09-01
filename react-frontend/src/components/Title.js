import React, { Component } from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";
import "fontsource-roboto";

export class Title extends Component {
  render() {
    return (
      <Typography component="div" variant="h2">
        <Box marginTop={9} p={0}>
          ScholarshipScraper
        </Box>
      </Typography>
    );
  }
}

export default Title;
