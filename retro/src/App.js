import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import Header from './components/Header'

import Main from './pages/Main'
import About from './pages/About'

const App = () => {
  return (
    <div className="top-page">
      <Header />
      <div className="main-content">
        <Router>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/about' component={About} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}
export default App;