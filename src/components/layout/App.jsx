import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';
import QA from 'pages/qa/QA.jsx';
import { getQAs } from 'actions/qa';
import About from 'pages/about/About';
import TodoList from 'pages/todo-list/TodoList.jsx' //TODO: doesn't work without .jsx WHY???
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {qas: []};
        this.addQA = this.addQA.bind(this);
    }

    componentWillMount() {
        const qas = this.props.initialData.qas || getQAs();
        if (qas) {
            this.setState({qas: qas.slice()});
        }
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
    initialData: PropTypes.object.isRequired
}
export default withRouter(App);
