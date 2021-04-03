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
        <a id="Adv" className="menu-item" href="/Adv">Logic-Based NLP</a>
        <a id="Sent" className="menu-item" href="/Sentences">Sample Model</a>
        <a id="JForm" className="menu-item" href="/JForm">Levels of Formality</a>
        <a id="NLPj" className="menu-item" href="/NLPJ">NLP for Japanese</a>
      </Menu>
      <Container fluid className='App-header'>
        Home Page
      </Container>
      <Image src="https://orientalsouls.com/wp-content/uploads/2018/09/JPSymbol01.jpg" fluid />
      <Container className='App-container'>
      <Container className='App-info'>
          This application is a hub for information all things Japanese to English translation as well as Japanese Natural language processing.
      </Container>
      <Container className='App-container'>
        <Row className='App-buttonContain'>
          <Col>
            <NavLink to="/Basic">
              <Button variant="light" size="m" block> Basic NLP </Button>
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/Adv">
              <Button variant="light" size="m" block> Logic-Based NLP </Button>
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/Sentences">
              <Button variant="light" size="m" block> Sample Model </Button>
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/JForm">
              <Button variant="light" size="m" block> Levels of Formality </Button>
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/NLPj">
              <Button variant="light" size="m" block> NLP for Japanese </Button>
            </NavLink>
          </Col>
        </Row>
    </Container>
    </Container>
      </>
  );
  }
}

export default App;
