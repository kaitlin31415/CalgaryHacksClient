import React, { Component } from 'react';
import '../SearchBox.css';
import SearchCriteria from './SearchCriteria';
import Slider from './Slider';
var feedMeButton = require('../images/feedMeButton.png');

class SearchBox extends Component {
    constructor(props) {
        super();
        this.state =  {
            name: "Comp Sci Waifu"

        };
    }
  render() {
    return (
      <div id='SearchBox'>
        <h2>Location</h2>
        <SearchCriteria category="Location" options={["Mac Hall","Nursing","Kinesiology", "ICT"]} />

        <h2>Dietary Restrictions</h2>
        <SearchCriteria category="Medical" options={["Celery Free", "Egg Free","Fish Free", "Gluten Free","Lactose Free", "Nuts Free", "Peanut Free", "Pork Free", "Soy Free", "Sugar Free"]} />
        <SearchCriteria category="LifeStyle" options={["Pescatarian","Vegan","Vegetarian"]} />
        <SearchCriteria category="Religious" options={["Halal","Kosher"]} />
        <h2>Cuisine:</h2> 
        <SearchCriteria category="Cuisine" options={["ALL", "American","Canadian","Chinese","Greek","Indian","Italian","Japanese", "Mexican", "Thai", "Vietnamese"]} />
        <h2>Flavours:</h2>
        <SearchCriteria category="Flavours" options={["ALL", "Salty","Savoury","Sour","Spicy","Sweet"]} />
        <Slider title="Budget" min={0} max={100}></Slider>
        <Slider title="Calories" min={0} max={4000}></Slider>
        <input type="image" src={feedMeButton} name="saveForm" class="btTxt submit" id="letsgo" />
      </div>
    )
  }
}

export default SearchBox;