import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import MenuBar from "../MenuBar";
import App from "../App";
import Items from "../Items";

const Root = () => (
  <>
    <Router>
      <MenuBar />
      <Route exact path="/" component={App} />
      <Route path="/store" component={Items} />
    </Router>
  </>
);

//sample comment (github commit counter test)

export default Root;
