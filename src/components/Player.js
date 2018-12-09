import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number
  };

  render(){
    const {
      name,
      id,
      score,
      index,
      isHighScore
    } = this.props;

    console.log( 'Player: ' + name + ' rendered');

    return (
      <div className="player">
        <Consumer>
          { ({ actions }) => (
            <span className="player-name">
              <button className="remove-player" onClick={() => actions.removePlayer( id )}>✖</button>

              <Icon isHighScore={isHighScore}/>

              { name }
            </span>
          )}
        </Consumer>


        <Counter
          score={ score }
          index={ index }/>
      </div>
    );
  }
}


export default Player;
