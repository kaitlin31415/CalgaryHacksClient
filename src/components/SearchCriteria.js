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
      </div>
    )
  }
}

export default SearchCriteria;