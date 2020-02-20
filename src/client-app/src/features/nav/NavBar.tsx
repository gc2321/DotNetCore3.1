﻿import React, { useContext } from 'react';
import { Menu, Container} from 'semantic-ui-react';
import ItemStore from '../../app/stores/itemStore';
import { Link, NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
    const itemStore = useContext(ItemStore);
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header as={NavLink} exact to='/'>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
                    Home Page
                </Menu.Item>
                <Menu.Item name='Menu' as={NavLink} to="/items" />
            </Container>
        </Menu>
    );
};

export default NavBar;