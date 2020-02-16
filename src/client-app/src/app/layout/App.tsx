import React, { useState, useEffect, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import { IItem } from '../models/item';

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
            <Container style={{ marginTop: '7em' }}>

            </Container>na
        </Fragment>
    );
};

export default App;
