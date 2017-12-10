import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TransitionWrapper from 'components/transition-wrapper/TransitionWrapper'
import DocumentMeta from "components/widgets/document-meta/DocumentMeta";
import { Pages } from 'routes';


class About extends Component {
    render() {
        return (
            /* <></> syntax is supported in Babel v7.0.0-beta.31*/
            <div>
                <DocumentMeta page={Pages.About}/>
                About sd
            </div>
        )
    }
}

About.propTypes = {};

export default TransitionWrapper(About);