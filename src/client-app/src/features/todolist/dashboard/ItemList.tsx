import React from 'react';
import { Item, Segment } from 'semantic-ui-react';
import { IItem } from '../../../app/models/item';

interface IProps {
    items: IItem[];
}

const ItemList: React.FC<IProps> = ({
    items
}) => {
    return (
        <Segment clearing>
            <Item.Group>
                {items.map(item => (
                    <Item key={item.id}>
                        <Item.Content>
                            <Item.Header as='a'>{item.title}</Item.Header>
                            
                            <Item.Description>
                                <div>{item.note}</div>
                            </Item.Description>

                            <Item.Extra>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    );
};

export default ItemList;