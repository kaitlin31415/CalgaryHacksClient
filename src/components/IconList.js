import React, { Component } from 'react';

var saltyIcon = require('../images/salty.png');
var sweetIcon = require('../images/sweet.png');
var savoryIcon = require('../images/savory.png');
var sourIcon = require('../images/sour.png');
var spicyIcon = require('../images/spicy.png');

var glutenIcon = require('../images/gluten.png');
var eggIcon = require('../images/egg.png');
var fishFreeIcon = require('../images/fishFree.png');
var celeryIcon = require('../images/celery.png');
var halalIcon = require('../images/halal.png');
var kosherIcon = require('../images/kosher.png');
var lactoseIcon = require('../images/lactose.png');
var nutIcon = require('../images/nut.png');
var peanutIcon = require('../images/peanut.png');
var pescatarianIcon = require('../images/pescatarian.png');
var porkIcon = require('../images/pork.png');
var soyIcon = require('../images/soy.png');
var sugarIcon = require('../images/sugar.png');
var veganIcon = require('../images/vegan.png');
var vegetarianIcon = require('../images/vegetarian.png');

class IconList extends Component {

    constructor(props) {
        super();
        this.state = {
            listOfIcons: props.listOfIcons
        };
    }
    render() {
        const displayIcons = (listOfIcons) => {
            for (let i = 0; i < listOfIcons.length; i++) {
                if (listOfIcons[i] === "Salty") {
                    listOfIcons[i] = <img src={saltyIcon} />
                } else if (listOfIcons[i] === "Savory") {
                    listOfIcons[i] = <img src={savoryIcon} />
                } else if (listOfIcons[i] === "Sour") {
                    listOfIcons[i] = <img src={sourIcon} />
                } else if (listOfIcons[i] === "Spicy") {
                    listOfIcons[i] = <img src={spicyIcon} />
                } else if (listOfIcons[i] === "Sweet") {
                    listOfIcons[i] = <img src={sweetIcon} />
                }
                else if (listOfIcons[i] === "Celery Free") {
                    listOfIcons[i] = <img src={celeryIcon} />
                } else if (listOfIcons[i] === "Egg Free") {
                    listOfIcons[i] = <img src={eggIcon} />
                } else if (listOfIcons[i] === "Fish Free") {
                    listOfIcons[i] = <img src={fishFreeIcon} />
                } else if (listOfIcons[i] === "Gluten Free") {
                    listOfIcons[i] = <img src={glutenIcon} />
                } else if (listOfIcons[i] === "Lactose Free") {
                    listOfIcons[i] = <img src={lactoseIcon} />
                } else if (listOfIcons[i] === "Nuts Free") {
                    listOfIcons[i] = <img src={nutIcon} />
                } else if (listOfIcons[i] === "Peanut Free") {
                    listOfIcons[i] = <img src={peanutIcon} />
                } else if (listOfIcons[i] === "Pork Free") {
                    listOfIcons[i] = <img src={porkIcon} />
                } else if (listOfIcons[i] === "Soy Free") {
                    listOfIcons[i] = <img src={soyIcon} />
                } else if (listOfIcons[i] === "Sugar Free") {
                    listOfIcons[i] = <img src={sugarIcon} />
                }
                else if (listOfIcons[i] === "Halal") {
                    listOfIcons[i] = <img src={halalIcon} />
                } else if (listOfIcons[i] === "Kosher") {
                    listOfIcons[i] = <img src={kosherIcon} />
                }
                else if (listOfIcons[i] === "Pescatarian") {
                    listOfIcons[i] = <img src={pescatarianIcon} />
                } else if (listOfIcons[i] === "Vegan") {
                    listOfIcons[i] = <img src={veganIcon} />
                } else if (listOfIcons[i] === "Vegetarian") {
                    listOfIcons[i] = <img src={vegetarianIcon} />
                }
            }

        };

        // const listNums = this.state.listOfIcons.map((number) =>
        //     <li>{number}</li>
        // );
        const anotherTry = this.state.listOfIcons.map((item) => 
            <section className="one-fourth" id="html">
            <img src={item} />
            </section>
        );
        return (
            <div>
                <ul>{anotherTry}</ul>

                {/* <section className="one-fourth" id="html">
                <img src={veganIcon} />
                </section>  */}
            </div>
        );
    }
}

export default IconList;