import React, { Component } from 'react';
import SearchBox from './SearchBox';
import FoodItem from './FoodItem';
import FunButton from './FunButton';
import '../home.css';

var saltyIcon = require('../images/salty.png');
var sweetIcon = require('../images/sweet.png');
var savoryIcon = require('../images/savory.png');
var sourIcon = require('../images/sour.png');
var spicyIcon = require('../images/spicy.png');

var glutenIcon = require('../images/gluten.png');
var eggIcon = require('../images/egg.png');
var fishFreeIcon = require('../images/fishFree.png');
var celeryIcon = require('../images/celery.png');
var halalIcon = require('../images/halal.png');
var kosherIcon = require('../images/kosher.png');
var lactoseIcon = require('../images/lactose.png');
var nutIcon = require('../images/nut.png');
var peanutIcon = require('../images/peanut.png');
var pescatarianIcon = require('../images/pescatarian.png');
var porkIcon = require('../images/pork.png');
var soyIcon = require('../images/soy.png');
var sugarIcon = require('../images/sugar.png');
var veganIcon = require('../images/vegan.png');
var vegetarianIcon = require('../images/vegetarian.png');

var tempFlavor = [sweetIcon, savoryIcon, sourIcon];
var tempDiet = [veganIcon, vegetarianIcon, glutenIcon, kosherIcon];
class HomePage extends Component {

  render() {
    return (
      <div>
        FEEDME I WANNA DIE
       <FunButton />

        <div id="hfirst">
          <SearchBox></SearchBox>
        </div>

        <div id="hsecond">
          <FoodItem name="Burger" price={5.25} restaurant="A" location="MacHall" calories={100} listOfFlavors={tempFlavor} listOfDiets={tempDiet} />
        </div>
      </div>
    )
  }
}

export default HomePage;