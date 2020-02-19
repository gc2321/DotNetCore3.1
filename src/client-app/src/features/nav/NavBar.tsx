import React, { useContext } from 'react';
import { Menu, Container} from 'semantic-ui-react';
import ItemStore from '../../app/stores/itemStore';

const NavBar: React.FC = () => {
    const itemStore = useContext(ItemStore);
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
                    Home Page
                </Menu.Item>

                <Menu.Item name='Menu' />

            </Container>
        </Menu>
    );
};

export default NavBar;