import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Items from "../Items";
import App from "../App";

const Root = () => (
  <>
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/items" component={Items} />
    </Router>
  </>
);

export default Root;
