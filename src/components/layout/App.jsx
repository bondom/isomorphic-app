import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import QA from 'pages/qa/QA.jsx';
import { getQAs } from 'actions/qa';
import About from 'pages/about/About';

//more likely this import doesn't work without extension, because there is ambiguity for node:
//  several files in one folder, and webpack loader isn't applied to files started outside of src/ folder
import TodoList from 'pages/todo-list/TodoList.jsx'
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {qas: []};
        this.addQA = this.addQA.bind(this);
    }

    componentWillMount() {
        const qas = getQAs();
        this.setState({qas: qas.slice()});
    }

    addQA(qa) {
        const updatedQAs = this.state.qas.slice();
        updatedQAs.push(qa);
        this.setState({qas: updatedQAs});
    }

    render() {
        const currentRoute = this.props.location.pathname;
        const linkClassName = (path) => `${currentRoute === path ? 'nav-bar__link nav-bar__link--chosen' : 'nav-bar__link'}`;
        return (
            <div className="page">
                <div className="content">
                    <div className="nav-bar-wrapper">
                        <nav className="nav-bar">
                            <ul className="nav-bar__links">
                                <li><Link className={linkClassName("/")} to="/">Home</Link></li>
                                <li><Link to="/about" className={linkClassName("/about")}>About</Link></li>
                                <li><Link to="/training" className={linkClassName("/training")}>Training</Link></li>
                                Counter: {this.props.counter}
                            </ul>
                        </nav>
                    </div>
                    <div className="main-wrapper">
                        <div className="main">
                            <Switch>
                                <Route exact path="/" render={(props) => <QA {...props} initialQAs={this.state.qas} createQA={this.addQA}/>}/>
                                <Route path="/about" component={About}/>
                                <Route path="/training" component={TodoList}/>
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
    counter: PropTypes.number.isRequired
}

const mapStateToProps = state => {
    return {
        counter: state.test.counter
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
