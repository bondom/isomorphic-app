import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';
import QA from 'pages/qa/QA';
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
              <Route exact path="/" render={() => <QA initialQAs={this.props.initialData.qas}/>} />
              <Route path="/about" component={About}/>
          </Switch>
      </div>
    );
  }
}

App.propTypes = {
    initialData: PropTypes.object.isRequired
}
export default App;
