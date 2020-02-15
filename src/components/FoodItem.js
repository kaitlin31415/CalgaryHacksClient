import React, { Component } from 'react';

class FoodItem extends Component {
    constructor(props) {
        super();
        this.state =  {
            name: props.name,
            price: props.price,
            restauant: props.restauant

        };
    }
  render() {
    return (
      <div>
       This is a Food Item: {this.props.name}
      </div>
    )
  }
}

export default FoodItem;