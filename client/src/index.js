import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter as Router, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import GamifyLogin from './components/GamifyLogin';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/">
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={GamifyLogin} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
