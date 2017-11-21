import React, { Component } from 'react';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';
import FrequentQuestions from 'pages/frequent-questions/FrequentQuestions';
import About from 'pages/about/About';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
          </ul>
          <Switch>
              <Route exact path="/" component={FrequentQuestions}/>
              <Route path="/about" component={About}/>
          </Switch>
      </div>
    );
  }
}

export default App;
