import React from "react";
import { Card } from "semantic-ui-react";

const ItemDetails: React.FC = () => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>This Header</Card.Header>
        <Card.Meta>
          <span>Meta Information</span>
        </Card.Meta>

        <Card.Description>
          A bunch of description. More information.
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default ItemDetails;
