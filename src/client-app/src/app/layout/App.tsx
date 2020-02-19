import React, { useState, useEffect, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import { IItem } from '../models/item';
import NavBar from '../../features/nav/NavBar';
import TodoDashboard from '../../features/todolist/dashboard/TodoDashboard';

const App = () => {
    const [itemList, setItemList] = useState<IItem[]>([]);

    useEffect(() => {
        axios.get<IItem[]>('http://localhost:5000/todolist/')
            .then(response => {
                let toDoList: IItem[] = [];
                response.data.forEach(item => {
                    toDoList.push(item);
                })
                setItemList(toDoList);
            });
    }, []);

    return (
        <Fragment>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>
                <TodoDashboard todo={itemList} />
            </Container>
        </Fragment>
        )
    
};

export default App;
