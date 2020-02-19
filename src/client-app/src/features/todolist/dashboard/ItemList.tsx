import React, { useContext } from "react";
import { Item, Segment } from "semantic-ui-react";
import { IItem } from "../../../app/models/item";
import { observer } from "mobx-react-lite";
import ItemStore from "../../../app/stores/itemStore";

const ItemList: React.FC = () => {
  const itemStore = useContext(ItemStore);
  const { itemsByKey } = itemStore;

  return (
    <Segment clearing>
      <Item.Group>
        {itemsByKey.map(item => (
          <Item key={item.id}>
            <Item.Content>
              <Item.Header as="a">{item.title}</Item.Header>

              <Item.Description>
                <div>{item.note}</div>
              </Item.Description>

              <Item.Extra></Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default observer(ItemList);
