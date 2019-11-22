import React, { Component } from "react";
import { AppBar, Typography, IconButton, Toolbar } from "@material-ui/core";

class header extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              {/*github img */}
            </IconButton>
            <Typography variant="h6">Crypto</Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default header;
