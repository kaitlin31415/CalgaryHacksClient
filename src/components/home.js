import React, { Component } from 'react';
import SearchBox from './SearchBox';
import FoodItem from './FoodItem';
import FunButton from './FunButton';
import '../home.css';
import Profile from './Profile';
import FeedMeButton from './FeedMeButton';

var dinoArtsIcon = require('../images/dinoArts.png');
var dinoScienceIcon = require('../images/dinoScience.png');
var dinoNurseIcon = require('../images/dinoNurse.png');
var dinoDefault = require("../images/dinoNurse.png");

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

var feedMeButton = require('../images/feedMeButton.png');

var burgerImg = require('../images/burger.jpg');
var bakechefImg = require('../images/bakechef.jpg');
var sushiImg = require('../images/sushi.jpg');

var burgerFlavor = [sweetIcon, savoryIcon, saltyIcon];
var burgerDiet = [celeryIcon, fishFreeIcon];

var bakechefFlavor = [savoryIcon];
var bakechefDiet = [fishFreeIcon];

var trying = 0;

const foodItems = [
  {
    id: 1,
    img: burgerImg,
    name: "Super Thick Bacon Burger",
    restaurant: "Carls Jr.",
    location: "MacHall",
    calories: 900, 
    listOfFlavors: burgerFlavor, 
    listOfDiets: burgerDiet

  }]

class HomePage extends Component {

  render() {

    return (
      <div>

        <div id="hfirst">
          <SearchBox></SearchBox>

        </div>

        <div id="hsecond">
        <img id="feedmelogo" src={feedMeButton}/>
          <FoodItem foodId={foodItems[0].id} name= {foodItems[0].name} price={foodItems[0].price} restaurant= {foodItems[0].restaurant} location={foodItems[0].location} listOfFlavors={foodItems[0].listOfFlavors} listOfDiets={foodItems[0].listOfDiets} />
          <FoodItem foodId={1} img={burgerImg} name="Super Thick Bacon Burger" price={11.25} restaurant="Carls Jr." location="MacHall" calories={900} listOfFlavors={burgerFlavor} listOfDiets={burgerDiet} />
          <FoodItem foodId={2} img={bakechefImg} name="Vietnamese Sub" price={10.55} restaurant="BakeChef" location="MacHall" calories={800} listOfFlavors={bakechefFlavor} listOfDiets={bakechefDiet} />
          <FoodItem foodId={3} img={sushiImg} name="Vietnamese Sub" price={10.55} restaurant="BakeChef" location="MacHall" calories={800} listOfFlavors={bakechefFlavor} listOfDiets={bakechefDiet} />

        </div>

        <div id="hthird">
          <Profile image={dinoDefault} />

          <button onClick={trying = Math.random() *15} > Try Me</button>

          <FunButton />

        </div>
      </div>
    )
  }
}

export default HomePage;