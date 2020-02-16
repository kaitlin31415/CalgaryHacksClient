import React, { Component } from 'react';

var dinoArtsIcon = require('../images/dinoArts.png');
var dinoScienceIcon = require('../images/dinoScience.png');
var dinoNurseIcon = require('../images/dinoNurse.png');
var dinoDefault = require("../images/dinoFucked.png");

class Profile extends Component {
    constructor(props) {
        super();
        this.state =  {
            image: props.image

        };
    }
  render() {
    return (
        <div id='Profile'>


          Beeblebrox
          <section className="one-fourth" id="html">
            <img src={this.state.image} />
            </section>

        </div>
      )
  }
}

export default Profile;