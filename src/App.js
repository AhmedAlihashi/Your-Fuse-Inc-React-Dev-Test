import React from "react";
import { Grid, Switch, FormControlLabel } from "@material-ui/core";

import "./App.css";

import Header from "./components/header";
import Footer from "./components/Footer.js";
import DataGrid from "./components/DataGrid";
import DataList from "./components/DataList";

const App = () => {
  const [state, setState] = React.useState({
    checkedA: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

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
          <Grid item>
            <Grid item>
              <h2 className="bodyTitle">Crypto Api Checker</h2>
              <FormControlLabel
                control={
                  <Switch
                    checked={state.checkedA}
                    onChange={handleChange("checkedA")}
                    value="checkedA"
                    color="primary"
                  />
                }
                label="Display Switch"
              />
            </Grid>

            <DataGrid />
            {/**   <DataList /> */}
          </Grid>
          <Footer />
        </Grid>
      </div>
    </div>
  );
};

export default App;
