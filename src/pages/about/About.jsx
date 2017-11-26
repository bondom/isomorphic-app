import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TransitionWrapper from 'components/transition-wrapper/TransitionWrapper'
import DocumentMeta from "components/widgets/document-meta/DocumentMeta";
import { Pages } from 'routes';

class About extends Component {
    render() {
        return (
            <div>
                <DocumentMeta page={Pages.About}/>
                About
            </div>
        )
    }
}

About.propTypes = {};

export default TransitionWrapper(About);