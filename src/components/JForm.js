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
        <a id="Adv" className="menu-item" href="/Adv">Advanced NLP</a>
        <a id="Sent" className="menu-item" href="/Sentences">Sentences</a>
        <a id="JForm" className="menu-item" href="/JForm">J Form</a>
        <a id="NLPj" className="menu-item" href="/NLPJ">NLP J</a>
      </Menu>
      <Container fluid className='App-header'>
        Japanese Level of Formality
      </Container>
      <Container className='App-body'>
        Hello
      </Container>
      </>
  );
  }
}

export default JForm;
