import React, { Component } from 'react';

class IconList extends Component {
    constructor(props){
        super();
        this.state = {
            listOfIcons: props.listOfIcons
        };
    }
    render() {   
     const listNums = this.state.listOfIcons.map((number) => 
     <li>{number}</li>
     );
        return (
            <div>
                <ul>{listNums}</ul>
            </div>
        );
    }
}

export default IconList;