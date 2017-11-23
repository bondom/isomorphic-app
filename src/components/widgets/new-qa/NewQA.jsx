import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './NewQA.css';

class NewQA extends Component {

    constructor(props) {
        super(props);
        this.onConfirmButtonClick = this.onConfirmButtonClick.bind(this);
    }

    componentDidMount() {
        this.questionInput.focus();
    }

    onConfirmButtonClick() {
        this.props.create({
            question: this.questionInput.value,
            answer: this.answerInput.value
        });
    }

    render() {
        return (
            <div className="new-qa-item">
                <div className="new-qa-item__buttons">
                    <button className="add-btn" onClick={this.onConfirmButtonClick}>Confirm</button>
                    <button className="add-btn" onClick={this.props.hide}>Cancel</button>
                </div>
                <input type="text"  className="new-qa-item__question" ref={input => this.questionInput = input}/>
                <textarea className="new-qa-item__answer" ref={input => this.answerInput = input}/>
            </div>
        )
    }
}

NewQA.propTypes = {
    hide: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired
};


export default NewQA;    