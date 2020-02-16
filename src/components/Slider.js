import React, { Component } from 'react';
import '../Slider.css';

class Slider extends Component {
    constructor(props) {
        super();
        this.state = {

        };
    }
    render() {

        return (
            <div id='Slider'>
                <h1>Im a Slider</h1>

                <input name="slider" type="range" min="0" step="5" max="100" list="tickmarks" />

                <datalist id="tickmarks">
                    <option value="0"></option>
                    <option value="10"></option>
                    <option value="20"></option>
                    <option value="30"></option>
                    <option value="40"></option>
                    <option value="50"></option>
                    <option value="60"></option>
                    <option value="70"></option>
                    <option value="80"></option>
                    <option value="90"></option>
                    <option value="100"></option>
                </datalist>
            </div>
        )
    }
};


export default Slider
