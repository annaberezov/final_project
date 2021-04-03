import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import sample from './sample.PNG';
import sampleverb from './sample-verb.PNG';



import './App.css';


class Sentences extends React.Component {
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
        Sample Model
      </Container>
      <Container className='App-body'>
        <Container className='App-body'>
          <Container className='App-text'>
          This is an example parsing done on a sentence using fugashi, a tool for tokeninzing japanese. It starts with a Japanese sentence.
          </Container>
          <Image src={sample} fluid rounded />
          <Container className='App-text'>
          This sentence translates to "My teacher goes to Tokyo often" but it is in formal tone since the subject is a teacher who is spoken about with respect. Now, we want to focus on 
          the verb here in the sentence.
          </Container>
          <Image src={sampleverb} fluid rounded />
          <Container className='App-text'>
          In order to tell the computer to focus on the verb, we use the fugashi tagger and instruct it to extract any words which are recognized as verbs. In this sample,
          the verb we are working with is the formal version of the verb to go. Becuase of this, we tell our model that this has to be formal since it is using this special
          verb which is always formal.
          </Container>
        </Container>
      </Container>
      </>
  );
  }
}

export default Sentences;
