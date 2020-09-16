import React, { Component } from "react";
import {
  Box,
  CircularProgress,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

export class FoundTable extends Component {
  render() {
    let rows;

    if (this.props.data.length > 0) {
      //builds table rows if api data is recieved
      rows = this.props.data.map((link, i) => {
        return (
          <TableRow key={i}>
            <TableCell align="center">
              <a href={link}>{link}</a>
            </TableCell>
          </TableRow>
        );
      });
    } else if (this.props.status === true) {
      //means api is called but we are waiting on data
      rows = (
        <Box p={2}>
          <CircularProgress />
        </Box>
      );
    } else {
      // api is not called
      rows = (
        <TableRow>
          <TableCell align="center">Nothing has been Found.</TableCell>
        </TableRow>
      );
    }

    return (
      <div>
        <Box p={4}>
          <Grid container direction="column">
            <Grid container>
              <Grid item xs={0} sm={1} md={2} />
              <Grid item xs={12} sm={10} md={8} justify="center">
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">
                          <strong>SCHOLARSHIPS FOUND</strong>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>{rows}</TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item xs={0} sm={1} md={2} />
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default FoundTable;
