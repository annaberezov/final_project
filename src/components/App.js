import React from 'react';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import { slide as Menu } from 'react-burger-menu';
import Image from 'react-bootstrap/Image'

import './App.css';

class App extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  render() {
    return(
      <>
      <Menu>
        <a id="Home" className="menu-item" href="/">Home</a>
        <a id="Basic" className="menu-item" href="/Basic">Basic NLP</a>
        <a id="Adv" className="menu-item" href="/Adv">Advanced NLP</a>
        <a id="Sent" className="menu-item" href="/Sentences">Sentences</a>
        <a id="JForm" className="menu-item" href="/JForm">J Form</a>
        <a id="NLPj" className="menu-item" href="/NLPJ">NLP J</a>
      </Menu>
      <Container fluid className='App-header'>
        Home Page
      </Container>
      <Image src="https://orientalsouls.com/wp-content/uploads/2018/09/JPSymbol01.jpg" fluid />
      <Container className='App-info'>
          Hello and Welcome to this app! 
      </Container>
      <Container className='App-info'>
          It is a hub for information all things Japanese to English translation. Please use the buttons to navigate to other pages.
      </Container>
      <Container className='App-body'>
        <Row className='App-container'>
          <Col>
            <NavLink to="/Basic">
              <Button> Basic NLP </Button>
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/Adv">
              <Button> Advanced NLP </Button>
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/Sentences">
              <Button> Sentences Survey </Button>
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/JForm">
              <Button> Japanese Levels of Formality </Button>
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/NLPj">
              <Button> NLP for Japanese </Button>
            </NavLink>
          </Col>
        </Row>
    </Container>
      </>
  );
  }
}

export default App;
