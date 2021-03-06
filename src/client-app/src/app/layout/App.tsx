import React, { useState, useEffect, Fragment, useContext } from "react";
import { Container } from "semantic-ui-react";
import { IItem } from "../models/item";
import NavBar from "../../features/nav/NavBar";
import TodoDashboard from "../../features/todolist/dashboard/TodoDashboard";
import LoadingComponent from "./LoadingComponent";
import ItemStore from "../stores/itemStore";
import { observer } from "mobx-react-lite";
import { Route, withRouter, RouteComponentProps } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import AboutUs from "../../features/home/AboutUs";
import ContactUs from "../../features/home/ContactUs";

const App: React.FC<RouteComponentProps> = () => {
  const itemStore = useContext(ItemStore);
  const [itemList, setItemList] = useState<IItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    itemStore.loadItems();
  }, [itemStore]);

  if (itemStore.loadingInitial) return <LoadingComponent />;

  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/AboutUs" component={AboutUs} />
      <Route exact path="/ContactUs" component={ContactUs} />
      <Route
        path={"/content/(.+)"}
        render={() => (
          <Fragment>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Route path="/content/items" component={TodoDashboard} />
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default withRouter(observer(App));
