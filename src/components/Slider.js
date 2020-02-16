import React, { Component } from 'react';
import '../Slider.css';

class Slider extends Component {
    constructor(props) {
        super();
        this.state = {
            min: props.min,
            max: props.max,
            title: props.title

        };
    }
    render() {

        return (
            <div id='Slider'>
                <h1 id="slidertitle">{this.state.title}:</h1>

                <input name="slider" type="range" min={this.state.min} max={this.state.max} />

 
            </div>
        )
    }
};


export default Slider
