import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/cart">
            <h1>this is cart page</h1>
          </Route>
          <Route path="/checkout">
            <h1>this is checkout page</h1>
          </Route>
          <Route path="/login">
            <h1>this is login page</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
/*
  главная страница должна быть в route последней, иначе при любом запросе, будет отображаться main page
*/
export default App;
