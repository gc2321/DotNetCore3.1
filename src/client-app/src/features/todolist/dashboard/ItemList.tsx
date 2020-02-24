import React, { useContext, useState, useEffect } from "react";
import { Item, Segment, Pagination } from "semantic-ui-react";
import { IItem } from "../../../app/models/item";
import { observer } from "mobx-react-lite";
import ItemStore from "../../../app/stores/itemStore";

const ItemList: React.FC = () => {
  const itemStore = useContext(ItemStore);
  const { itemsByKey } = itemStore;

  const itemsPerPage = 10;
  const [page, setPage] = useState<number>(1);
  const [showItems, setShowItems] = useState<IItem[]>([]);

  const setPageNum = (event: any, pageInfo:any) => {
    var activePage = pageInfo.activePage;
    setPage(activePage);
  };

  const totalPages = itemsByKey.length / itemsPerPage;

  useEffect(() => {
    const sitems = itemsByKey.slice(
      (page - 1) * itemsPerPage,
      (page - 1) * itemsPerPage + itemsPerPage
    );
    setShowItems(sitems);
  }, [itemsByKey, page]);

  console.log(showItems);

  return (
    <div>
      <div className="ui center aligned segment">
        <Pagination
          style={{ marginTop: "10px" }}
          boundaryRange={2}
          siblingRange={1}
          activePage={page}
          totalPages={totalPages}
          onPageChange={setPageNum}
        />
      </div>

      <Segment clearing style={{ marginTop: "15px", marginBottom: "20px" }}>
        <Item.Group>
          {showItems.map(item => (
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
    </div>
  );
};

export default observer(ItemList);
