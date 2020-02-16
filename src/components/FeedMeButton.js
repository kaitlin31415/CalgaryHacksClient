import React, { Component } from 'react';

class FeedMeButton extends Component {
    constructor(props) {
      super(props);
      
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.props.handleClick.bind(this);
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