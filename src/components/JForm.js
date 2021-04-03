import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Container from 'react-bootstrap/Container';



import './App.css';


class JForm extends React.Component {
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
        Levels of Formality
      </Container>
      <Container className='App-body'>
        Hello
      </Container>
      </>
  );
  }
}

export default JForm;
