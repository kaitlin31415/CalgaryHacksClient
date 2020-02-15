import React, { Component } from 'react';

class IconList extends Component {
    constructor(props){
        super();
        this.state = {
            listOfIDs: props.listOfIDs
        };
    }
    render() {   
     const listNums = this.state.listOfIDs.map((number) => 
     <li>{number}</li>
     );
        return (
            <div>
                <h1>Food Name: {this.state.name}</h1>
                <h1>Restaurant: {this.state.restaurant}</h1>
       
                <ul>{listNums}</ul>

            </div>
        );
    }
}

export default IconList;