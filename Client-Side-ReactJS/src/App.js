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
      players: [],
      form: {
        id: 0,
        username: "",
        email: "",
        password: "",
        experience: 0,
        lvl: 0,
      },
      titleForm: 'Add Form'
    };
  }

  changeFormHandler = (e) => {
    const key = e.target.name;
    const value = e.target.value; 

    this.setState({
      form: {
        ...this.state.form,
        [key]: value
      }
    });
  }

  submitAddHandler = (e) => {
    e.preventDefault();
    
    if(this.state.titleForm === 'Add Form'){
      this.state.form.id = this.state.players.length > 0 ? this.state.players[this.state.players.length - 1].id + 1 : 1
        
      this.setState({
        players: [...this.state.players, this.state.form],
        form: {
          id: 0,
          username: "",
          email: "",
          password: "",
          experience: 0,
          lvl: 0,
        },
        titleForm: 'Add Form'
      });
    }

    if(this.state.titleForm === 'Edit Form'){
      const data = this.state.players.map(i => i.id === this.state.form.id ? this.state.form : i);

      this.setState({
        players: data,
        form: {
          id: 0,
          username: "",
          email: "",
          password: "",
          experience: 0,
          lvl: 0,
        },
        titleForm: 'Add Form'
      });
    }
  }

  editFormHandler = (data) => {
    this.setState({
      form: data,
      titleForm: 'Edit Form'
    })
  }

  render() {
    return (
      <Container className="my-4">
        <Row>
          <Col md={8} className="p-4 border">
            <Search />
            <ListPlayer players={this.state.players} editFormHandler={this.editFormHandler} />
          </Col>
          <Col md={4} className="p-4 border bg-secondary">
            <Forms form={this.state.form} titleForm={this.state.titleForm} changeFormHandler={this.changeFormHandler} submitAddHandler={this.submitAddHandler} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
