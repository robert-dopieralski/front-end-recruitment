import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to our Fantastic shop</h1>
          <p>
            <Link to="/items">Explore our items</Link>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
