import React, { Component } from 'react';

class SearchBox extends Component {
    constructor(props) {
        super();
        this.state =  {
            name: "Eunice"

        };
    }
  render() {
    return (
      <div>
       This is a searchbox. For {this.state.name}
      </div>
    )
  }
}

export default SearchBox;