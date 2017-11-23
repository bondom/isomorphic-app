import React from 'react'
import ReactDOM from 'react-dom'
import { Transition } from 'react-transition-group'

const duration = 300;

const defaultStyle = {
    transition: `height ${duration}ms ease-in-out`,
    height: 0,
    display: 'inline-block',
    backgroundColor: '#8787d8',
    overflow: 'hidden',
    boxSizing: 'border-box'
}

const transitionStyles = {
    entering: {
        height: 0
    },
    entered: {
        height: 82
    },
};

const Fade = ({ in: inProp }) => (
    <Transition in={inProp} timeout={duration}>
        {(state) => (
            <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}>
                <div style={{padding: 20}}>
                    I'm A fade Transition!
                </div>
            </div>
        )}
    </Transition>
);

class Example extends React.Component {
    state = { show: false }

    handleToggle() {
        this.setState(({ show }) => ({
            show: !show
        }))
    }

    render() {
        const { show } = this.state
        return (
            <div>
                <button onClick={() => this.handleToggle()}>
                    Click to toggle
                </button>
                <div>
                    <Fade in={!!show} />
                </div>
            </div>
        )
    }
}

export default Example;