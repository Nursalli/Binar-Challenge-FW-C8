// import logo from './logo.svg';
// import './App.css';
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Search from "./Components/Search";
import ListPlayer from "./Components/ListPlayer";
import Forms from "./Components/Forms";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [
        {
          username: "tes",
          email: "tes@gmail.com",
          password: "123",
          experience: 0,
          lvl: 0,
        },
      ],
      form: {
        username: "",
        email: "",
        password: "",
        experience: 0,
        lvl: 0,
      },
    };
  }

  render() {
    return (
      <Container className="my-4">
        <Row>
          <Col md={8} className="p-4 border">
            <Search />
            <ListPlayer players={this.state.players} />
          </Col>
          <Col md={4} className="p-4 border bg-secondary">
            <Forms form={this.state.form} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
