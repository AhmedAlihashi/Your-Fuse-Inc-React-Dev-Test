import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import * as dataAction from "./actions/dataAction";
import Header from "./components/header";
import Footer from "./components/Footer.js";
import { Grid, Paper, GridList, GridListTile } from "@material-ui/core";

class App extends Component {
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    console.log(this.props.data);

    const { data } = this.props;

    const dataList = data.length ? (
      data.map(data => {
        return (
          <Grid item key={data.id}>
            <Paper>
              <p>{data.name}</p>
              <p>{data.symbol}</p>
              <p>Price: {data.priceUsd} USD</p>
              <p>Rank: {data.rank}</p>
              <p>Volume: {data.volumeUsd24Hr}</p>
              <p>Current Supply:{data.supply}</p>
            </Paper>
          </Grid>
        );
      })
    ) : (
      <div>No data</div>
    );

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
              <Grid item xs={12}>
                <h2 className="bodyTitle">Crypto Api Checker</h2>
              </Grid>
              <Grid
                container
                direction="row"
                spacing={3}
                justify="center"
                alignItems="center"
                xs
              >
                {dataList}
              </Grid>
            </Grid>
            <Footer />
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps, dataAction)(App);
