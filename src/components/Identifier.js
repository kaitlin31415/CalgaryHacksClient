import React, { Component } from 'react';

class Identifier extends Component {
    constructor(props) {
        super();
        this.state =  {
            name: props.name,
        };
    }
  render() {
    return (
      <div>
       ID: {this.state.name}
      </div>
    )
  }
}

export default Identifier;