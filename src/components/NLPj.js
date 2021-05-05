import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import fugashi from './fugashi.PNG';

import './App.css';
import { ListGroup } from 'react-bootstrap';


class NLPj extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  render() {
    return(
      <>
      {/* This is the hamburger menu with references to direct to other pages */}
      <Menu> 
        <a id="Home" className="menu-item" href="/">Home</a>
        <a id="Basic" className="menu-item" href="/Basic">Basic NLP</a>
        <a id="Adv" className="menu-item" href="/Adv">Logic-Based NLP</a>
        <a id="Sent" className="menu-item" href="/Sentences">Sample Model</a>
        <a id="JForm" className="menu-item" href="/JForm">Levels of Formality</a>
        <a id="NLPj" className="menu-item" href="/NLPJ">NLP for Japanese</a>
      </Menu>
      <Container fluid className='App-header'>
        NLP for Japanese 
      </Container>
      <Container className='App-section'>
        Modes
      </Container>
      <Container className='App-body'>
        <Container className='App-text'>
        There has already been extensive work done for Natural Language Processing in Japanese. With just Google Translate, the standard typing input is available along with handwriting character input. The character image detection feature is also available for Japanese. With all these avenues for input, using Google Translate for Japanese is great for users travelling to Japan, trying to experience Japanese culture, or learn simple, everyday Japanese. Aside from Google, there are several other applications and tools which are being developed to improve machine understanding of Japanese. A lot of these tools are written as a Python library with the core of the processing done in more powerful languages such as C, C++,  but some are written fully in Python.
        Here is a diagram from the 2019 PyCon Japan which documents some tools for Japanese NLP
        </Container>
        <Image src={fugashi} fluid rounded />
        Example output using fugashi, a python wrapper for tokenizing and categorizing Japanese sentences, to parse a japanese sentence.
        </Container>
      <Container className='App-section'>
        Additional Resources
      </Container>
      <Container className ='App-body'>
        <Container className='App-links'>
          {/* this ListGroup is a react bootstrap compotent which groups these three buttons and allows for the user to navigate to these pages outside of the application */}
          <ListGroup variant="flush">
            <ListGroup.Item variant = "dark" action href = "https://towardsdatascience.com/an-overview-of-nlp-libraries-for-japanese-be1805837143">An Overview of Japanese NLP Libraries</ListGroup.Item>
            <ListGroup.Item variant = "dark" action href = "https://www.ninjal.ac.jp/english/">National Institute for Japanese Language and Languistics</ListGroup.Item>
            <ListGroup.Item variant = "dark" action href = "https://www.dampfkraft.com/nlp.html">Dampfkraft-Natural Language Processing</ListGroup.Item>
          </ListGroup>
        </Container>
      </Container>     
      </>
  );
  }
}

export default NLPj;
