import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

import './App.css';


class Adv extends React.Component {
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
        <a id="Sent" className="menu-item" href="/Sentences">Sentences</a>
        <a id="JForm" className="menu-item" href="/JForm">J Form</a>
        <a id="NLPj" className="menu-item" href="/NLPJ">NLP J</a>
      </Menu>
      <Container fluid className='App-header'>
        Logic-Based NLP
      </Container>
      <Container className='App-body'>
        <Container className='App-text'>
        Natural language processing is a sub-topic of machine learning which in-turn is a subtopic of artificial intelligence. A major aspect of machine learning is the creation and training of models to be able to think and respond as a human might. But, training models using millions of points of data may not be the only way to approach the many questions and problems surrounding machine processing of language. Logic-based modeling, trying to apply spoken languages to the format of computer languages is another approach that can be taken. 
          <Image src="https://images.slideplayer.com/26/8413494/slides/slide_3.jpg" fluid rounded />
          This strategy of course has pros and cons. By being logic-driven, there is no need for training time: the rules are set in the grammar and the machine simply follows the rules. But, the downside of this is that there are limitations; exceptions and such cannot be replicated in a strict logic-based grammar. It also does not learn as languages and input changes; it will only ever change if someone directly interacts with the structure. Another pro of this approach is that training data is not necessary: to create a ML trained model requires thousands and thousands points of data, the more data the more accurate the model is in the majority of cases. But, with logic-based modeling, data is only really required to test the performance of the model. Overall, logic-based modeling is just another approach to take towards teaching machines natural languages.
        </Container>        
      </Container>
      </>
  );
  }
}

export default Adv;
