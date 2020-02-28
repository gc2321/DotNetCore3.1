import { observable, action, computed, configure, runInAction } from "mobx";
import { createContext } from "react";
import { IItem } from "../models/item";
import agent from "../api/agent";
import { IFindItemsParam } from "../models/findItemsParam";

configure({ enforceActions: "always" });

class ItemStore {
  @observable itemRegistry = new Map();
  //   @observable items: IItem[] = [];
  @observable loadingInitial = false;
  @observable submitting = false;

  @observable queryTerm: string = "";
  @observable queryType: string = "";

  @computed get itemsByKey() {
    return Array.from(this.itemRegistry.values()).sort((a, b) => a.id - b.id);
  }

  @action setQueryParams = (term: string, type: string) => {
    this.queryTerm = term;
    this.queryType = type;
  };

  @action loadItems = async () => {
    this.loadingInitial = true;

    try {
      const items = await agent.Items.list();
      runInAction("load items", () => {
        items.forEach((item, i) => {
          item.title = (i + 1).toString(10).concat(" ", item.title);
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

  @action searchItem = async (param: IFindItemsParam) => {
    this.submitting = true;
    try {
      const results = await agent.Items.search(param);
      runInAction("search items", () => {
        results.forEach((item, i) => {
          item.title = (i + 1).toString(10).concat(" ", item.title);
          this.itemRegistry.set(item.id, item);
        });
        this.submitting = false;
      });
    } catch (error) {
      runInAction("search item error", () => {
        this.submitting = false;
      });
      console.log(error);
    }
  };
}

export default createContext(new ItemStore());
