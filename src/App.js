import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";

import Header from "./components/header";
import Body from "./components/Body";
import Footer from "./components/Footer.js";
function App() {
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
            <Body />
          </Grid>
          <Footer />
        </Grid>
      </div>
    </div>
  );
}

export default App;
