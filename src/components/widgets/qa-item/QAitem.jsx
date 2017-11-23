import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './QAitem.css';

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
                <div className={`qa-item__answer${this.state.showAnswer ? ' qa-item__answer--opened' : ''}`}>
                    {qa.answer}
                </div>
            </div>
        )
    }
}

QAitem.propTypes = {
    qa: PropTypes.object.isRequired
};


export default QAitem;    