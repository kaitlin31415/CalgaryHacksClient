import React, { Component } from 'react';
import '../Profile.css';

var dinoArtsIcon = require('../images/dinoArts.png');
var dinoScienceIcon = require('../images/dinoScience.png');
var dinoNurseIcon = require('../images/dinoNurse.png');
var dinoDefault = require("../images/dinoFucked.png");

class Profile extends Component {
  constructor(props) {
    super();
    this.state = {
      image: props.image

    };
  }
  render() {
    return (
      <div id='Profile'>
        <section className="one-fourth" id="html">
          <img id="profilepic" src={this.state.image} />
        </section>
        <h1>PROFILE NAME</h1>

      </div>
    )
  }
}

export default Profile;