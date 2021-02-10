import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Basic from './components/Basic';
import Adv from './components/Adv';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        <Route path="/basic" component={Basic} />
        <Route path="/adv" component={Adv} />
      </Switch>
      </BrowserRouter>,
      rootElement
    );
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
