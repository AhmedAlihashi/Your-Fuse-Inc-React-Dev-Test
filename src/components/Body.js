import { Paper, Grid } from "@material-ui/core";
import React, { Component } from "react";

class Body extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          direction="row"
          spacing={5}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <h2 className="bodyTitle">Crypto Api Checker</h2>
          </Grid>

          <Grid item xs={12}>
            <Paper>placeholder</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Body;
