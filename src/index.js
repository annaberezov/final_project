import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Basic from './components/Basic';
import Adv from './components/Adv';
import Sent from './components/Sentences';
import NLPj from './components/NLPj';
import JForm from './components/JForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        <Route path="/basic" component={Basic} />
        <Route path="/adv" component={Adv} />
        <Route path="/sentences" component={Sent} />
        <Route path="/NLPj" component={NLPj} />
        <Route path="/JForm" component={JForm} />
      </Switch>
      </BrowserRouter>,
      rootElement
    );
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
