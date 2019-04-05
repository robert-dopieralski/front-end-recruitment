import React, { Component } from "react";

import ItemsTable from "./ItemsTable";

import "./Items.css";
import { Loader } from "semantic-ui-react";

class Items extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/data/products.json").then(response =>
      response
        .json()
        .then(data => this.setState({ products: data.products }))
        .catch(error => console.log(error))
    );
  }

  render() {
    const { products } = this.state;
    return (
      <div className="products-list">
        {products.length ? (
          <ItemsTable products={products} />
        ) : (
          <Loader active />
        )}
      </div>
    );
  }
}

export default Items;
