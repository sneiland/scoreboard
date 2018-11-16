/*
import React, {Component} from 'react';
class AddPlayerForm extends Component {
  state = {
    value: ''
  };

  handleValueChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer( this.state.value );
    this.setState({
      value: ''
    });
  }

  render(){
    console.log( this.playerInput );
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter a player's name"
          value={this.state.value}
          onChange={this.handleValueChange}/>

        <button type="submit">Add Player</button>
      </form>
    );
  }
}*/

import React from 'react';
const AddPlayerForm = ({ addPlayer }) => {
  let playerInput = React.createRef();
  let handleSubmit = (e) => {
    e.preventDefault();
    addPlayer( playerInput.current.value );
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={playerInput}
        placeholder="Enter a player's name"/>

      <button type="submit">Add Player</button>
    </form>
  );
}

export default AddPlayerForm;
