import React, { Component } from 'react';
import SearchBox from './SearchBox';
import FoodItem from './FoodItem';
var tempFlavor = ["iconSweet", "iconSavory", "iconSour"];
var tempDiet = ["Vegan", "Vegitarien", "Celic"];
class HomePage extends Component {
  
  render() {
    return (
      <div>
       tnjkafnkla.dnfk;ldsanfklaks
       <SearchBox></SearchBox>
       <FoodItem name="BUrger" price={5.25} restaurant="A" location="" calories={100}  listOfFlavors={tempFlavor} listOfDiets={tempDiet} />
      </div>
    )
  }
}

export default HomePage;