import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import { slide as Menu } from 'react-burger-menu';


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
        <a id="JForm" className="menu-item" href="/Sentences">J Form</a>
        <a id="NLPj" className="menu-item" href="/Sentences">NLP J</a>
      </Menu>
      <Container className='App-header'>
        Home Page
      </Container>
      <Container className='App-body'>
        <Row>
          <Col>
            <Link to="/Basic">
              <Button attribute='primary'> Basic </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/Adv">
              <Button attribute='primary'> Advanced </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/Sentences">
              <Button attribute='primary'> Sentences </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/JForm">
              <Button attribute='primary'> J Form </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/NLPj">
              <Button attribute='primary'> NLP J </Button>
            </Link>
          </Col>
        </Row>
    </Container>
      </>
  );
  }
}

export default App;
