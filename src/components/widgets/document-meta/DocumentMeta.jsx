import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DocumentMetaModule from 'react-document-meta';
import { pageContent } from './seo-content';

class DocumentMeta extends Component {
  render() {
    const meta = pageContent[this.props.page];
    return <DocumentMetaModule {...meta} {...this.props} />;
  }
}

DocumentMeta.propTypes = {
  page: PropTypes.string.isRequired
};

export default DocumentMeta;