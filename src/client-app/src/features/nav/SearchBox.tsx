import React from "react";
import { Form, Search, Radio, Container } from "semantic-ui-react";

const SearchBox: React.FC = () => {
  return (
    <Container>
      <Search style={ {marginBottom: "10px" }}/>
      <Form style={ {marginBottom: "-10px" }}>
        <Form.Group inline>
          <Radio label="Option one" name="radioGroup" value="one" />
          <Radio
            label="Option two"
            name="radioGroup"
            value="two"
            defaultChecked
          />
          <Radio label="Option three" name="radioGroup" value="three" />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default SearchBox;
