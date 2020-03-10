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
  const {
    queryTerm,
    queryType,
    searchItem,
    setQueryTerm,
    setQueryType
  } = itemStore;

  const handleSubmit = () => {
    searchItem();
  };

  const handleOptionChange = (event: any, {value}:any) => {
    //const { value } = event.currentTarget;
    setQueryType(value);
  };

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setQueryTerm(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="searchBox">
        <div>
          <Form.Input
            icon={{ name: "search", link: true, onClick: () => handleSubmit() }}
            onChange={handleInputChange}
            placeholder="Search..."
            value={queryTerm}
          />
        </div>

        <div>
          <Form.Group inline style={{ marginBottom: "-2px" }}>
            <Radio
              label='Option 1'
              name='option'
              value='one'
              checked={queryType==='one'}
              onChange={handleOptionChange}
            />
            <Radio
              label='Option 2'
              name='option'
              value='two'
              checked={queryType==='two'}
              onChange={handleOptionChange}
            />
            <Radio
              label='Option 3'
              name='option'
              value='three'
              checked={queryType==='three'}
              onChange={handleOptionChange}
            />
          </Form.Group>
        </div>
      </div>
    </Form>
  );
};

export default observer(SearchBox);
