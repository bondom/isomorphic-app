import React, {Component} from 'react';
import PropTypes from 'prop-types';

class QAitem extends Component {
    render() {
        const qa = this.props.qa;
        return (
            <div>
                {qa.question} {qa.answer}
            </div>
        )
    }
}

QAitem.propTypes = {
    qa: PropTypes.object.isRequired
};


export default QAitem;    