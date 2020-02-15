import React, { Component } from 'react';

class SearchCriteria extends Component {
    constructor(props) {
        super();
        this.state =  {
            category: props.category

        };
    }
  render() {
    return (
      <div>
       This is a Search Criteria For the Category {this.state.category}
      </div>
    )
  }
}

export default SearchCriteria;