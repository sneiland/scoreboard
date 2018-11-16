import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
        score:0
      },
      {
        name: "Treasure",
        id: 2,
        score:0
      },
      {
        name: "Ashley",
        id: 3,
        score:0
      },
      {
        name: "James",
        id: 4,
        score:0
      }
    ]
  };

  prevPlayerId = 4;

  handleAddPlayer = ( name ) => {
    let newPlayer = {
        name,
        score: 0,
        id: this.prevPlayerId += 1
    };
    this.setState( prevState => {
      return {
        players : [
          ...prevState.players,
          newPlayer
        ]
      }
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleScoreChange = (index,delta) => {
    this.setState( prevState => ({
        score: prevState.players[index].score += delta
      }));
    }

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={this.state.players}
        />

        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            score={player.score}
          />
        )}

        <AddPlayerForm addPlayer={ this.handleAddPlayer }/>
      </div>
    );
  }
}

export default App;
