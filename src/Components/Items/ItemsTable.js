import React from "react";

import { Table } from "semantic-ui-react";

import Product from "./Product";

const ItemsTable = ({ products }) => (
  <Table celled padded>
    <TableHeader />
    <TableBody products={products} />
  </Table>
);

const TableHeader = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Product Name</Table.HeaderCell>
      <Table.HeaderCell>Description</Table.HeaderCell>
      <Table.HeaderCell>Price</Table.HeaderCell>
      <Table.HeaderCell>Free Shipping</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
);

const TableBody = ({ products }) => (
  <Table.Body>
    {products.length
      ? products.map((prod, index) => <Product key={index} item={prod} />)
      : "Sorry, we are out of stock"}
  </Table.Body>
);

export default ItemsTable;
