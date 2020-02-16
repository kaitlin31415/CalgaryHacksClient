import React, { Component } from 'react';
import SearchBox from './SearchBox';
import FoodItem from './FoodItem';
import FunButton from './FunButton';
var tempFlavor = ["iconSweet", "iconSavory", "iconSour"];
var tempDiet = ["Vegan", "Vegitarien", "Celic"];
class HomePage extends Component {
  
  render() {
    return (
      <div>
       FEEDME I WANNA DIE
       <FunButton />

       <SearchBox></SearchBox>
       <FoodItem name="Burger" price={5.25} restaurant="A" location="MacHall" calories={100}  listOfFlavors={tempFlavor} listOfDiets={tempDiet} />
      </div>
    )
  }
}

export default HomePage;