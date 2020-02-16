import React, { Component } from 'react';
import '../SearchBox.css';
import SearchCriteria from './SearchCriteria';

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
        Location
        <SearchCriteria category="Location" options={["Mac Hall","Nursing","Kinesiology", "ICT"]} />

        Dietary Restrictions
        <SearchCriteria category="Medical" options={["Celery Free", "Egg Free","Fish Free", "Gluten Free","Lactose Free", "Nuts Free", "Peanut Free", "Pork Free", "Soy Free", "Sugar Free"]} />
        <SearchCriteria category="LifeStyle" options={["Pescatarian","Vegan","Vegetarian"]} />
        <SearchCriteria category="Religious" options={["Halal","Kosher"]} />
        Cuisine: 
        <SearchCriteria category="Cuisine" options={[1,2,3,4]} />
        Restaurant:
        <SearchCriteria category="Restaurant" options={[1,2,3,4]} />
        Flavours: 
        <SearchCriteria category="Flavours" options={[1,2,3,4]} />

      </div>
    )
  }
}

export default SearchBox;