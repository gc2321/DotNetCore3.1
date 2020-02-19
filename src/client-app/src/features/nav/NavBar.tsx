import React from 'react';
import { Menu, Container} from 'semantic-ui-react';

const NavBar: React.FC = () => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
                    ToDoList
                </Menu.Item>

                <Menu.Item name='Activities' />

            </Container>
        </Menu>
    );
};

export default NavBar;