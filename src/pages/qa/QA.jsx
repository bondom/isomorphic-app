import React, {Component} from 'react';
import PropTypes from 'prop-types';
import QAitem from 'components/widgets/qa-item/QAitem.jsx';
import './QA.scss'
import NewQA from "components/widgets/new-qa/NewQA.jsx";
import TransitionWrapper from 'components/transition-wrapper/TransitionWrapper'
import {CSSTransitionGroup} from 'react-transition-group'
import DocumentMeta from "components/widgets/document-meta/DocumentMeta";
import { Pages } from 'routes';



class QA extends Component {

    constructor(props) {
        super(props);
        this.state = {newQAOpen: false};
        this.toggleNewQA = this.toggleNewQA.bind(this);
        this.onNewQAConfirm = this.onNewQAConfirm.bind(this);
    }

    toggleNewQA() {
        this.setState((prevState) => {
            return {
                newQAOpen: !prevState.newQAOpen
            }
        });
    }

    onNewQAConfirm(qa) {
        this.toggleNewQA();
        this.props.createQA(qa);
    }

    render() {
        return (
            <div className="qa">
                <DocumentMeta page={Pages.Main}/>
                <img src={require('assets/img/blue.jpg')} alt="main" />
                <main role="main" className="qa-content">

                    <CSSTransitionGroup
                        transitionName="add-btn-transition"
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={10}>
                            { !this.state.newQAOpen
                                ? <button className="add-btn" onClick={this.toggleNewQA}>Add</button>
                                : null
                            }
                    </CSSTransitionGroup>


                    <CSSTransitionGroup
                        transitionName="qa-answer-transition"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>

                        {this.state.newQAOpen ? <NewQA hide={this.toggleNewQA} create={this.onNewQAConfirm}/> : null}
                    </CSSTransitionGroup>
                    {
                        this.props.initialQAs.map((qa,id) => {
                            return <QAitem qa={qa} key={id}/>
                        })
                    }
                </main>
            </div>
        )
    }
}

QA.propTypes = {
    initialQAs: PropTypes.array.isRequired,
    createQA: PropTypes.func.isRequired
};

export default TransitionWrapper(QA);