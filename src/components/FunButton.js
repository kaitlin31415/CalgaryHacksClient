import React, { Component } from 'react';

var randomNum;

class FunButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            rand: 0
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const min = 1;
        const max = 4;
        const rand = min + Math.random() * (max - min);
        randomNum = Math.round(rand);
        if (randomNum < 1 || randomNum > 3) {
            randomNum = 2;
        }

        this.setState(state => ({
            isToggleOn: !state.isToggleOn,
            rand: 0
        }));


    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'SURPRISE ME' : randomNum}
            </button>
        );
    }
}

export default FunButton;