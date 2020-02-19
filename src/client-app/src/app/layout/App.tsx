import React, { useState, useEffect, Fragment, useContext } from "react";
import { Container } from "semantic-ui-react";
import { IItem } from "../models/item";
import NavBar from "../../features/nav/NavBar";
import TodoDashboard from "../../features/todolist/dashboard/TodoDashboard";
import LoadingComponent from './LoadingComponent';
import ItemStore from '../stores/itemStore';
import {observer} from 'mobx-react-lite';

const App = () => {
  const itemStore = useContext(ItemStore);
  const [itemList, setItemList] = useState<IItem[]>([]);
  const [loading, setLoading] = useState(true);
  const[ submitting, setSubmitting] = useState(false);

  useEffect(() => {
    itemStore.loadItems();
  }, [itemStore]);

  if(itemStore.loadingInitial) return <LoadingComponent />

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <TodoDashboard />
      </Container>
    </Fragment>
  );
};

export default observer(App);
