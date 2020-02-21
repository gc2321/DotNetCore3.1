import React from "react";
import {
  Form,
  Search,
  Radio,
  Container,
  Label,
  Input
} from "semantic-ui-react";

const SearchBox: React.FC = () => {
  return (
    <Container className="searchBox">
      <Search style={{ marginBottom: "10px" }} />
      <Form style={{ marginBottom: "-15px" }} >
        <Form.Group inline>
          <Radio name="radioGroup" value="one" />
          <Label color="red" horizontal>
            Option 1
          </Label>
          <Radio name="radioGroup" value="two" defaultChecked />
          <Label color="purple" horizontal>
            Option 2
          </Label>
          <Radio name="radioGroup" value="three" />
          <Label horizontal>Option 3</Label>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default SearchBox;
