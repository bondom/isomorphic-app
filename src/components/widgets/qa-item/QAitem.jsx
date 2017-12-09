import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './QAitem.scss';
import TransitionWrapper from 'components/transition-wrapper/TransitionWrapper';
import {CSSTransitionGroup} from 'react-transition-group'

class QAitem extends Component {
    constructor(props) {
        super(props);
        this.state = {showAnswer: false};
        this.onAnswerToggle = this.onAnswerToggle.bind(this);
    }

    onAnswerToggle() {
        this.setState((prevState) => {
            return {
                showAnswer: !prevState.showAnswer
            }
        })
    }


    render() {
        const qa = this.props.qa;
        return (
            <div className="qa-item">
                <button className="qa-item__question" onClick={this.onAnswerToggle}><h2>{qa.question}</h2></button>
                <CSSTransitionGroup
                    transitionName="qa-answer-transition"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {this.state.showAnswer ? <div className={`qa-item__answer`}>
                        {qa.answer}
                    </div> : null}
                </CSSTransitionGroup>
            </div>
        )
    }
}

QAitem.propTypes = {
    qa: PropTypes.object.isRequired
};

export default QAitem;