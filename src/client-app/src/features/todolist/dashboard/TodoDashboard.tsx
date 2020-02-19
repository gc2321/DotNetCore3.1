import React, { useContext } from "react";
import { Grid } from "semantic-ui-react";
import { IItem } from "../../../app/models/item";
import ItemList from "./ItemList";
import ItemDetails from "../details/ItemDetails";
import { observer } from "mobx-react-lite";
import ItemStore from '../../../app/stores/itemStore';

const TodoDashboard: React.FC = () => {

  const itemStore = useContext(ItemStore);

  return (
    <Grid>
        <Grid.Column width={11}>
          <ItemList />
        </Grid.Column>
        <Grid.Column width={5}>
          <ItemDetails />
        </Grid.Column>
    </Grid>
  );
};

export default observer(TodoDashboard);
