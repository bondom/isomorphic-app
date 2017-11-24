import React, {Component} from 'react';
import PropTypes from 'prop-types';
import QAitem from 'components/widgets/qa-item/QAitem';
import './QA.css'
import NewQA from "components/widgets/new-qa/NewQA";
import TransitionWrapper from 'components/transition-wrapper/TransitionWrapper'
import {CSSTransitionGroup} from 'react-transition-group'

class QA extends Component {

    constructor(props) {
        super(props);
        this.state = {newQAOpen: false};
        this.toggleNewQA = this.toggleNewQA.bind(this);
        this.onNewQAConfirm = this.onNewQAConfirm.bind(this);
    }

/*    componentWillMount() {
        if(this.props.initialQAs) {
            this.setState({qas: this.props.initialQAs.slice()});
            console.log("Data were retrieved from server");
            return;
        }
    }*/

    toggleNewQA() {
        this.setState((prevState) => {
            return {
                newQAOpen: !prevState.newQAOpen
            }
        });
    }

    onNewQAConfirm(qa) {
        this.toggleNewQA();
        this.props.createQA(qa);
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
                <main role="main" className="qa-content">

                    <CSSTransitionGroup
                        transitionName="add-btn-transition"
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={10}>
                            { !this.state.newQAOpen
                                ? <button className="add-btn" onClick={this.toggleNewQA}>Add</button>
                                : null
                            }
                    </CSSTransitionGroup>


                    <CSSTransitionGroup
                        transitionName="qa-answer-transition"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>

                    {this.state.newQAOpen ? <NewQA hide={this.toggleNewQA} create={this.onNewQAConfirm}/> : null}
                    </CSSTransitionGroup>
                    {
                        this.props.initialQAs.map((qa,id) => {
                            return <QAitem qa={qa} key={id}/>
                        })
                    }
                </main>
            </div>
        )
    }
}

QA.propTypes = {
    initialQAs: PropTypes.array.isRequired,
    createQA: PropTypes.func.isRequired
};
export default TransitionWrapper(QA);