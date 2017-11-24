import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {CSSTransitionGroup} from 'react-transition-group'

import './TransitionWrapper.css';


const TransitionWrapper = (WrappedComponent) => {

    return class TransitionWrapper extends Component {
        render() {
            return (
                <CSSTransitionGroup
                    transitionName="page"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    <WrappedComponent {...this.props} />
                </CSSTransitionGroup>
            )
        }
    }

{/*        <Route {...rest} render={(props) => (//props - contains props of Router(history, match location)
            <CSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>
                <WrappedComponent {...props} {...componentProps}/>
            </CSSTransitionGroup>
        )}/>*/}

}


export default TransitionWrapper;
