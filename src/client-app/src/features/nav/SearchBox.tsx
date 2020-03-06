import React, { useContext, FormEvent, useState } from "react";
import {
  Form,
  Search,
  Radio,
  Container,
  Label,
  Input,
  Menu,
  Segment
} from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import ItemStore from "../../../src/app/stores/itemStore";

const SearchBox: React.FC = () => {
  const itemStore = useContext(ItemStore);
  const { queryTerm, queryType, searchItem, setOptionParam } = itemStore;

  const handleSubmit = () => {
    searchItem({ term: queryTerm, type: queryType });
  };

  const handleOptionChange = (event: any) => {
    const { option } = event.currentTarget;
    setOptionParam(option);
  };

  return (
    <div className="searchBox">
      <div>
        <Input icon="search" placeholder="Search..." />
      </div>

      <div>
        <Form.Group inline>
          <Radio
            label="Option 1"
            onChange={handleOptionChange}
            name="option"
            value="one"
            checked={queryType === "one"}
          />
          <Radio
            label="Option 2"
            onChange={handleOptionChange}
            name="option"
            value="two"
            checked={queryType === "two"}
          />
          <Radio
            label="Option 3"
            onChange={handleOptionChange}
            name="option"
            value="three"
            checked={queryType === "three"}
          />
        </Form.Group>
      </div>
    </div>
  );
};

export default observer(SearchBox);
