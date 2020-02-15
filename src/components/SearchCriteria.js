import React, { Component } from 'react';
import '../SearchCriteria.css';

class SearchCriteria extends Component {
    constructor(props) {
        super();
        this.state =  {
            category: props.category

        };
    }
  render() {
    return (
      <div id='SearchCriteria'>
       This is a Search Criteria For the Category {this.state.category}
       <label> Category
          <select name="category" multiple>
            <option value="" selected disabled> -Select Category- </option>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
            <option value="4"> 4 </option>
            <option value="5"> 5 </option>
            <option value="6"> 6 </option>
            <option value="7"> 7 </option>
            <option value="8"> 8 </option>
          </select>
      </label>
      </div>
    )
  }
}

export default SearchCriteria;