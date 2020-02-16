import React, { Component } from 'react';
import SearchBox from './SearchBox';
import FoodItem from './FoodItem';
var temp = ["icon1", "icon2", "icon3"];
class HomePage extends Component {
  
  render() {
    return (
      <div>
       tnjkafnkla.dnfk;ldsanfklaks
       <SearchBox></SearchBox>
       <FoodItem name="BUrger" price={5.25} restaurant="A" location="" calories={100}  listOfIDs={temp}/>
      </div>
    )
  }
}

export default HomePage;