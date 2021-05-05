import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import level from './level.PNG';



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
        <Container className='App-text'>
          The Japanese language handles formality differently than in English. There are grammatical rules which dictate level of formality. A simple example
          is the use of special verbs when speaking to someone formally versus the regual verb when speaking casually. But, these levels of formality are not clear cut
          and simple to understand. There are situations in which someone unaware of the Japanese culture would find it appropriate to speak casually but in Japan it would
          be considered rude. High-level understanding can be obtained by breaking the language into two ranks: higher and lower.
        </Container>
        <Image src={level} fluid rounded />
        <Container className='App-text'>
          When someone of the lower rank is speaking to someone of a higher rank, it is best to speak more formally. But, within this relationship there are varying levels of 
          formal. The formal language a child uses with their parents differs from the formal language they use when speaking with their teacher. Becuase of this,
          understanding and mastering the use of formalities is difficult for all users of Japanese, native and non-native.
        </Container>        
      </Container>
      </>
  );
  }
}

export default JForm;
