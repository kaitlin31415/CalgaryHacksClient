import React, { Component } from 'react';
import IconList from './IconList';

class FoodItem extends Component {
  constructor(props) {
    super();
    this.state = {
      name: props.name,
      price: props.price,
      restaurant: props.restaurant,
      location: props.location,
      calories: props.calories,
      listOfIDs: props.listOfIDs
    };
  }
  
  render() {
    return (
      <div>
        <h1>Food Name: {this.state.name}</h1>
        <h1>Restaurant: {this.state.restaurant}</h1>
       
        {/* <ul>{listNums}</ul> */}

        <IconList listOfIDs = {this.state.listOfIDs} />

      </div>
    );

  }
}

export default FoodItem;