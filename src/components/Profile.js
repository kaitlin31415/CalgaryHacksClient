import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super();
        this.state =  {
            name: props.name,



        };
    }
  render() {
    return (
      <div id='Profile'>
       
      </div>
    )
  }
}

export default Profile;