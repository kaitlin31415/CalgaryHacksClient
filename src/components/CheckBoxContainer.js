
import React, { Component } from 'react';
import Checkbox from './CheckBox';
import '../CheckBox.css';

class CheckboxContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    console.log(this.state);
  }

  render() {
    return (
      <React.Fragment>
        {
          this.props.itemList.map(item => (
            <label key={item}>
              {item}
              <li id="boxes"><Checkbox id="checkboxxxx" name={item} checked={this.state.checkedItems.get(item)} onChange={this.handleChange} /></li>
            </label>
          ))
        }
      </React.Fragment>
    );
  }
}

export default CheckboxContainer;