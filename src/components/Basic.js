import React from 'react';
import { slide as Menu } from 'react-burger-menu';


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
      </Menu>
      </>
  );
  }
}

export default Basic;
