import React from 'react';
import { Consumer } from './Context';

const AddPlayerForm = () => {
  let playerInput = React.createRef();

  return (
    <Consumer>
      { (context) => {
        let handleSubmit = (e) => {
          e.preventDefault();
          context.actions.addPlayer( playerInput.current.value );
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
    }
    </Consumer>
  );
}

export default AddPlayerForm;
