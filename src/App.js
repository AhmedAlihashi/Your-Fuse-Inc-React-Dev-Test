import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import * as dataAction from "./actions/dataAction";

import Header from "./components/header";
import Footer from "./components/Footer.js";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }

  componentDidMount() {
    // this.apiCall();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Grid
            container
            spacing={5}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
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
            </Grid>
            <Footer />
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, X) => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: data => dispatch(dataAction.getData(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
