import React, { useContext, FormEvent, useState } from "react";
import {
  Form,
  Search,
  Radio,
  Container,
  Label,
  Input
} from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import ItemStore from "../../../src/app/stores/itemStore";

const SearchBox: React.FC = () => {
  const itemStore = useContext(ItemStore);
  const { queryTerm, queryType, searchItem, setQueryParams } = itemStore;

  const handleSubmit = () => {
    searchItem({ term: queryTerm, type: queryType });
  };

  const handleChange = (event: any) => {
    const {term, radioGroup} = event.currentTarget;
    setQueryParams(term, radioGroup);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Container className="searchBox">
        <Search
          onSearchChange={handleChange}
          name="term"
          value={queryTerm}
          style={{ marginBottom: "10px" }}
        />
        <Form style={{ marginBottom: "-15px" }}>
          <Form.Group inline>
            <Radio
              onChange={handleChange}
              name="radioGroup"
              value="one"
              checked={queryType === "one"}
            />
            <Label color="red" horizontal>
              Option 1
            </Label>
            <Radio
              onChange={handleChange}
              name="radioGroup"
              value="two"
              checked={queryType === "two"}
            />
            <Label color="purple" horizontal>
              Option 2
            </Label>
            <Radio
              onChange={handleChange}
              name="radioGroup"
              value="three"
              checked={queryType === "three"}
            />
            <Label horizontal>Option 3</Label>
          </Form.Group>
        </Form>
      </Container>
    </Form>
  );
};

export default observer(SearchBox);
