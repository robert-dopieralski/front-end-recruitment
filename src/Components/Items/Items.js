import React, { Component } from "react";
import { Table, Checkbox } from "semantic-ui-react";

import "./Items.css";

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
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Product Name</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Free Shipping</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {products.length
              ? products.map((prod, index) => (
                  <Product key={index} item={prod} />
                ))
              : "Sorry, we are out of stock"}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

const Product = ({
  item: { title, description, price, currencyFormat, isFreeShipping }
}) => (
  <Table.Row>
    <Table.Cell>{title}</Table.Cell>
    <Table.Cell>{description ? description : "No description"}</Table.Cell>
    <Table.Cell>{`${price} ${currencyFormat}`}</Table.Cell>
    <Table.Cell>
      <Checkbox disabled checked={isFreeShipping} />
    </Table.Cell>
  </Table.Row>
);

export default Items;
