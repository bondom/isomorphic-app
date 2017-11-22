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
        <div className="page-wrapper">
          <div className="content">
              <nav>
                  <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                  </ul>
              </nav>
              <Switch>
                  <Route exact path="/" render={() => <QA initialQAs={this.props.initialData.qas}/>} />
                  <Route path="/about" component={About}/>
              </Switch>
          </div>
          <footer className="footer">
            Copyright@2017 All rights reserved
          </footer>
        </div>
    );
  }
}

App.propTypes = {
    initialData: PropTypes.object.isRequired
}
export default App;
