import React, { Component } from 'react';

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
    /*
    const l =  () => [1,2,3,4].map(function (item) {
      return <li> {item} </li>;
      
    });
    */
   //const numbers = [1, 2, 3, 4, 5];
   const listNums = this.state.listOfIDs.map((number) => 
    <li>{number}</li>
   );
  
    return (
      <div>
        <h1>Food Name: {this.state.name}</h1>
        <h1>Restaurant: {this.state.restaurant}</h1>
       
        <ul>{listNums}</ul>

      </div>
    );

  }
}

export default FoodItem;