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
var takImg = require('../images/takoyaki.jpg');
var pizzaBun = require('../images/pizzabun.png');
var hotdog = require('../images/hotdog.jpg');

var burgerFlavor = [sweetIcon, savoryIcon, saltyIcon];
var burgerDiet = [celeryIcon, fishFreeIcon];

var bakechefFlavor = [savoryIcon];
var bakechefDiet = [fishFreeIcon];

var sushiDiet = [lactoseIcon,porkIcon,glutenIcon];

var trying = 0;

const foodItems = [
  {
    id: 1,
    img: burgerImg,
    name: "Super Thick Bacon Burger",
    price: 9.55,
    restaurant: "Carls Jr.",
    location: "MacHall",
    calories: 900, 
    listOfFlavors: burgerFlavor, 
    listOfDiets: burgerDiet

  },  

  {
    id: 2,
    img: bakechefImg,
    name: "Vietnamese Sub",
    price: 8.99,
    restaurant: "Bake Chef",
    location: "MacHall",
    calories: 800, 
    listOfFlavors: bakechefFlavor, 
    listOfDiets: bakechefDiet
  },

  {
    id: 3,
    img: sushiImg,
    name: "Fresh Sushi",
    price: 6.99,
    restaurant: "Umi Sushi",
    location: "MacHall",
    calories: 450, 
    listOfFlavors: [savoryIcon, spicyIcon], 
    listOfDiets: sushiDiet
  },
  {
    id: 4,
    img: takImg,
    name: "Takoyaki",
    price: 5.99,
    restaurant: "Umi Sushi Express",
    location: "MacHall",
    calories: 200, 
    listOfFlavors: [sweetIcon, savoryIcon], 
    listOfDiets: [lactoseIcon,porkIcon]

  },  

  {
    id: 5,
    img: pizzaBun,
    name: "Pizza Bun",
    price: 3.55,
    restaurant: "Bake Chef",
    location: "MacHall",
    calories: 175, 
    listOfFlavors: bakechefFlavor, 
    listOfDiets: bakechefDiet
  },

  {
    id: 6,
    img: hotdog,
    name: "Hotdog Bun",
    price: 3.55,
    restaurant: "Bake Chef",
    location: "MacHall",
    calories: 450, 
    listOfFlavors: bakechefFlavor, 
    listOfDiets: bakechefDiet
  },
]

class HomePage extends Component {

  render() {

    return (
      <div>

        <div id="hfirst">
          <SearchBox></SearchBox>

        </div>

        <div id="hsecond">
        <img id="feedmelogo" src={feedMeButton}/>
          <FoodItem foodId={foodItems[0].id} img= {foodItems[0].img} name= {foodItems[0].name} price={foodItems[0].price} restaurant= {foodItems[0].restaurant} location={foodItems[0].location} listOfFlavors={foodItems[0].listOfFlavors} listOfDiets={foodItems[0].listOfDiets} />
          <FoodItem foodId={foodItems[1].id} img= {foodItems[1].img} name= {foodItems[1].name} price={foodItems[1].price} restaurant= {foodItems[1].restaurant} location={foodItems[1].location} listOfFlavors={foodItems[1].listOfFlavors} listOfDiets={foodItems[1].listOfDiets} />
          <FoodItem foodId={foodItems[2].id} img= {foodItems[2].img} name= {foodItems[2].name} price={foodItems[2].price} restaurant= {foodItems[2].restaurant} location={foodItems[2].location} listOfFlavors={foodItems[2].listOfFlavors} listOfDiets={foodItems[2].listOfDiets} />
          <FoodItem foodId={foodItems[3].id} img= {foodItems[3].img} name= {foodItems[3].name} price={foodItems[3].price} restaurant= {foodItems[3].restaurant} location={foodItems[3].location} listOfFlavors={foodItems[3].listOfFlavors} listOfDiets={foodItems[3].listOfDiets} />
          <FoodItem foodId={foodItems[4].id} img= {foodItems[4].img} name= {foodItems[4].name} price={foodItems[4].price} restaurant= {foodItems[4].restaurant} location={foodItems[4].location} listOfFlavors={foodItems[4].listOfFlavors} listOfDiets={foodItems[4].listOfDiets} />
          <FoodItem foodId={foodItems[5].id} img= {foodItems[5].img} name= {foodItems[5].name} price={foodItems[5].price} restaurant= {foodItems[5].restaurant} location={foodItems[5].location} listOfFlavors={foodItems[5].listOfFlavors} listOfDiets={foodItems[5].listOfDiets} />
        </div>

        <div id="hthird">
          <Profile image={dinoDefault} />

          <FunButton />

        </div>
      </div>
    )
  }
}

export default HomePage;