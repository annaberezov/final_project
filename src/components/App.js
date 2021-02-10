import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
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
      </Menu>
      <Container className='App-header'>
        Home Page
      </Container>
      <Container className='App-body'>
      <Link to="/Basic">
        <Button attribute='primary'>
          Basic
        </Button>
      </Link>
      <Link to="/Adv">
        <Button attribute='primary'>
          Advanced
        </Button>
      </Link>
    </Container>
      </>
  );
  }
}

export default App;
