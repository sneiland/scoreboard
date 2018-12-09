import React from 'react';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = () => {
  return (
    <Consumer>
      {
        ( {players,actions} ) => {
          let highScore = actions.getHighScore();
          return (
            <React.Fragment>
              {players.map( (player, index) =>
                <Player
                  {...player}
                  key={player.id.toString()}
                  index={index}
                  isHighScore={player.score === highScore}
                />
              )}
            </React.Fragment>
          );
        }
    }
    </Consumer>
  );
}

export default PlayerList;
