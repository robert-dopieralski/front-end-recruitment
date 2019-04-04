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
      <Route path="/items" component={Items} />
    </Router>
  </>
);

export default Root;
