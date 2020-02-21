import React from "react";
import {
  Container,
  Segment,
  Header,
  Image,
  Button,
  List
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          Home Page
        </Header>

        <Header as="h2" inverted content="Welcome to HomePage" />

        <Button as={Link} to="/content/items" size="huge" inverted>
          Take me to the items!
        </Button>
        <div style={{ "height":"300px"}}>

        </div>
        <div>
          <List inverted horizontal>
            <List.Item as={Link} to="/AboutUs">
              About Us
            </List.Item>

            <List.Item as={Link} to="/ContactUs">
              Contact
            </List.Item>
          </List>
        </div>
      </Container>
    </Segment>
  );
};
export default HomePage;
