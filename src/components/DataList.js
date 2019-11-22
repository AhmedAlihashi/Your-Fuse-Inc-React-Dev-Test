import React, { Component } from "react";
import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import { connect } from "react-redux";
import * as dataAction from "../actions/dataAction";

export class DataList extends Component {
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    const { data } = this.props;

    const dataList = data.length ? (
      data.map(data => {
        let x = data.supply;
        let y = data.priceUsd;
        let z = data.volumeUsd24Hr;

        let supply = Number(x).toFixed(2);
        let price = Number(y).toFixed(2);
        let volume = Number(z).toFixed(2);
        return (
          <Grid xs={10} item key={data.rank}>
            <Card>
              <CardContent>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Typography>{data.name}</Typography>
                  <Typography>{data.symbol}</Typography>
                  <Typography>Rank: {data.rank}</Typography>
                </Grid>

                <Typography color="textSecondary">
                  Price: {price} USD
                </Typography>
                <Typography color="textSecondary">Volume: {volume}</Typography>
                <Typography color="textSecondary">
                  Current Supply:{supply}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })
    ) : (
      <div>Loading....</div>
    );
    return (
      <Grid
        container
        direction="coloum"
        spacing={5}
        justify="center"
        alignItems="center"
      >
        {dataList}
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps, dataAction)(DataList);
