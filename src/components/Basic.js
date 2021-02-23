import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

import './App.css';

class Basic extends React.Component {
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
        Basic NLP
      </Container>
      <Container className='App-body'>
      <Image src="https://c1.sfdcstatic.com/content/dam/blogs/ca/Blog%20Posts/get-to-know-ai-for-business-natural-language-processing-open-graph.png" fluid rounded />
        <Container className='App-text'>
          Natural Language Processing, better known as NLP is a subfield combining computer science and linguistics. 
          It can be categorized as a form of artificial intelligence focused on human language. The big question of NLP is how can we train machines to understand
          and communicate with language just like humans do. Some categories of NLP include speech recognition, text-to-speech, part-of-speech tagging, parsing of sentences, 
          understanding of semantics, machine translation, and many others! NLP is a very large subcategory of AI which encompasses any and all use of human language. 
        </Container>
        <Image src="https://miro.medium.com/max/768/1*z_EFTnhzxA3FJROcjOqNXg.png" fluid rounded />
        <Container className='App-text'>
          Common applications of NLP include language translators such as Google translate and chatbots. 
          NLP also interacts with other fields of computer science such as computer vision; within Google translate for example, a picture can be used as the base for translation. 
          The machine must first identify the letters and text before translating. There are many applications of NLP across many different fields.
        </Container>        
      </Container>
      </>
  );
  }
}

export default Basic;
