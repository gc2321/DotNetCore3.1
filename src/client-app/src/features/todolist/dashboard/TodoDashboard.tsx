import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { IItem } from '../../../app/models/item';

interface IProps {
    todo: IItem[]
}

const TodoDashboard: React.FC<IProps> = ({ todo }) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <List>
                    {todo.map(item => (
                        <List.Item key={item.id}>{item.title}</List.Item>
                    ))}
                </List>
            </Grid.Column>
        </Grid>
    )
};

export default TodoDashboard;