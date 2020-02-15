import React, { Component } from 'react';
import '../SearchBox.css';

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
        This is a searchbox. For {this.state.name}
      </div>
    )
  }
}

export default SearchBox;