import { observable, action, computed, configure, runInAction } from "mobx";
import { createContext } from "react";
import { IItem } from "../models/item";
import agent from "../api/agent";

configure({ enforceActions: "always" });

class ItemStore {
  @observable itemRegistry = new Map();
  //   @observable items: IItem[] = [];
  @observable loadingInitial = false;

  @computed get itemsByKey() {
    return Array.from(this.itemRegistry.values()).sort((a, b) => a.id - b.id);
  }

  @action loadItems = async () => {
    this.loadingInitial = true;

    try {
      const items = await agent.Items.list();
      runInAction("load items", () => {
        items.forEach((item, i) => {
          item.title = (i+1).toString(10).concat(" ", item.title);
          this.itemRegistry.set(item.id, item);
        });
        this.loadingInitial = false;
      });
    } catch (error) {
      runInAction("load items error", () => {
        console.log(error);
        this.loadingInitial = false;
      });
    }
  };
}

export default createContext(new ItemStore());
