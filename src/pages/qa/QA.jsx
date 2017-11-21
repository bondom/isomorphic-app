import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { getQAs } from 'actions/qa';
//import QAItem from 'components/QAitem';

class QA extends Component {

    constructor(props) {
        super(props);
        this.state = {qas: []};
    }

    componentWillMount() {
        console.log("will mount");
        if(this.props.initialQAs) {
            this.setState({qas: this.props.initialQAs.slice()});
            console.log("Data were retrieved from server");
            return;
        }
    }

    componentDidMount() {
        this.setState({qas: getQAs()});
    }

    render() {
        return (
            <div>
                {
                    this.state.qas.map((qa,id) => {
                        return <div key={id}>{qa.question} {qa.answer}</div>
                        //return <QAItem qa={qa} key={id}/>
                    })
                }
            </div>
        )
    }
}

QA.propTypes = {
    initialQAs: PropTypes.array
};
export default QA;