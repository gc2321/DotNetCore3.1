import React from "react";
import { Grid } from "semantic-ui-react";
import { IItem } from "../../../app/models/item";
import ItemList from "./ItemList";
import ItemDetails from "../details/ItemDetails";

interface IProps {
  todo: IItem[];
}

const TodoDashboard: React.FC<IProps> = ({ todo }) => {
  return (
    <Grid>
        <Grid.Column width={11}>
          <ItemList items={todo} />
        </Grid.Column>
        <Grid.Column width={5}>
          <ItemDetails />
        </Grid.Column>
    </Grid>
  );
};

export default TodoDashboard;
