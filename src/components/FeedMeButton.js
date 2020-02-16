import React, { Component } from 'react';

class FeedMeButton extends Component {
    constructor(props) {
      super(props);
      
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      console.log(this.state.checkedItems);
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          FEED ME
        </button>
      );
    }
  }

  export default FeedMeButton;