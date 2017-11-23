import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';
import QA from 'pages/qa/QA';
import About from 'pages/about/About.jsx';
import './App.css';

class App extends Component {
  render() {
    const currentRoute = this.props.location.pathname;
    const linkClassName = (path) => `${currentRoute === path ? 'nav-bar__link nav-bar__link--chosen' : 'nav-bar__link'}`;
    return (
        <div className="page">
          <div className="content">
              <div className="nav-bar-wrapper">
                  <nav className="nav-bar">
                      <ul className="nav-bar__links">
                          <li className={linkClassName("/")}><Link to="/">Home</Link></li>
                          <li className={linkClassName("/about")}><Link to="/about">About</Link></li>
                      </ul>
                  </nav>
              </div>
              <div className="main-wrapper">
                  <div className="main">
                      <Switch>
                          <Route exact path="/" render={() => <QA initialQAs={this.props.initialData.qas}/>} />
                          <Route path="/about" component={About}/>
                      </Switch>
                  </div>
              </div>
          </div>
          <div className="footer-wrapper">
            <footer className="footer">
              Copyright@2017 All rights reserved
            </footer>
          </div>
        </div>
    );
  }
}

App.propTypes = {
    initialData: PropTypes.object.isRequired
}
export default withRouter(App);
