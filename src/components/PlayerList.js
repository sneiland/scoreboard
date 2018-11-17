import React from 'react';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = ( { handleScoreChange, handleRemovePlayer, highScore} ) => {

  return (
    <Consumer>
      { context => (
          <React.Fragment>
            {context.map( (player, index) =>
              <Player
                {...player}
                key={player.id.toString()}
                index={index}
                changeScore={handleScoreChange}
                removePlayer={handleRemovePlayer}
                isHighScore={player.score === highScore}
              />
            )}
          </React.Fragment>
      )}
    </Consumer>
  );
}

PlayerList.propTypes = {
    handleScoreChange: PropTypes.func.isRequired,
    handleRemovePlayer: PropTypes.func.isRequired
};

export default PlayerList;

/*
import React from 'react';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = ( {players, handleScoreChange, handleRemovePlayer, highScore} ) => {
  return (
    <React.Fragment>
      {players.map( (player, index) =>
        <Player
          name={player.name}
          id={player.id}
          key={player.id.toString()}
          index={index}
          changeScore={handleScoreChange}
          removePlayer={handleRemovePlayer}
          score={player.score}
          isHighScore={player.score === highScore}
        />
      )}

    </React.Fragment>
  );
}

export default PlayerList;

*/
