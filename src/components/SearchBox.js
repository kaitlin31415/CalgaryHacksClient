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
        Location:
        <SearchCriteria category="Location" />

        Dietary Restrictions:
        <SearchCriteria category="Medical" />
        <SearchCriteria category="LifeStyle" />
        <SearchCriteria category="Religious" />
        Cuisine: 
        <SearchCriteria category="Cuisine" />
        Restaurant:
        <SearchCriteria category="Restaurant" />
        Flavours: 
        <SearchCriteria category="Flavours" />
        
      </div>
    )
  }
}

export default SearchBox;