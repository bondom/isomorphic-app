import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { getQAs } from 'actions/qa';
//import QAItem from 'components/QAitem';

class QA extends Component {

    constructor(props) {
        super(props);
        this.state = {qas: []};
    }

    componentDidMount() {
        this.setState({qas: getQAs()});
    }

    render() {
        return (
            <div>
                {
                    this.state.qas.map((qa,id) => {
                        return <div>{qa.question} {qa.answer}</div>
                        //return <QAItem qa={qa} id={id}/>
                    })
                }
            </div>
        )
    }
}

QA.propTypes = {};
export default QA;