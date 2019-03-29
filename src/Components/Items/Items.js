import React, { Component } from "react";
import { Table, Checkbox } from "semantic-ui-react";

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
              ? products.map(prod => <Product item={prod} />)
              : ""}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

const Product = ({ item }) => (
  <Table.Row>
    <Table.Cell>{item.title}</Table.Cell>
    <Table.Cell>{item.description}</Table.Cell>
    <Table.Cell>{`${item.price} ${item.currencyFormat}`}</Table.Cell>
    <Table.Cell>
      <Checkbox disabled checked={item.isFreeShipping} />
    </Table.Cell>
  </Table.Row>
);

export default Items;
