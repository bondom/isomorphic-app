import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TransitionWrapper from 'components/transition-wrapper/TransitionWrapper'

class About extends Component {
    render() {
        return (
            <div>
                About
            </div>
        )
    }
}

About.propTypes = {};

export default TransitionWrapper(About);