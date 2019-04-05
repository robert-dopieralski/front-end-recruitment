import React from "react";

import { Table, Checkbox } from "semantic-ui-react";

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

export default Product;
