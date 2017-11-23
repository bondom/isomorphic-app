import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { getQAs } from 'actions/qa';
import QAitem from 'components/qa-item/QAitem';
import './QA.css'

class QA extends Component {

    constructor(props) {
        super(props);
        this.state = {qas: []};
    }

    componentWillMount() {
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
            /*<main> element should contain main content of web page, content should be unique on website
            * role=main - is used for screenreaders that don't support this element
            *
            * <article> element should containt part of self-sufficient information,
            * which can be pulled out of the context of the entire page without loss of meaning
            * Example: news, article in blog, comment of user
            *
            * <section> - represents section(group) of linked content, unlike <article> it isn't self-sufficient
            *
            * <nav> - used for group of links for website navigation as well as for posts(articles) navigation
            *
            * <aside> - used for information, that is directly related to the surrounding content, this information
            * may be useful for user, but isn't main
            * Example: group of elements, numbers or citations.
            *
            * <header> - used for introductory part of article of web page
            * Example:
            * <header>
                <h1>Компания Google покупает Nest</h1>
                <p>Опубликовано: 13 января 2014</p>
              </header>
            *
            * <footer> - represents info about author, copyrights, links to related web pages
            * <address> - represents contact information about article or web page
            * Example:
            * <footer>
                <address>
                  Автор <a href="mailto:matt@example.com">Matt West</a>
                </address>
                <p>Copyright Matt West 2014</p>
              </footer>
            *
            *
            * */
            <div className="qa">
                <img src={require('assets/img/blue.jpg')} alt="main" />
                <main role="main">
                    {
                        this.state.qas.map((qa,id) => {
                            return <QAitem qa={qa} key={id}/>
                        })
                    }
                </main>
            </div>
        )
    }
}

QA.propTypes = {
    initialQAs: PropTypes.array
};
export default QA;