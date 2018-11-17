import React, { Component } from 'react';
import { Provider } from './Context';
import Header from './Header';
import PlayerList from './PlayerList';
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

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if( highScore ){
      return highScore;
    }
    return null;
  }

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
    const highScore = this.getHighScore();

    return (
      <Provider value={this.state.players}>
        <div className="scoreboard">
          <Header />

          <PlayerList
            handleScoreChange={this.handleScoreChange}
            handleRemovePlayer={this.handleRemovePlayer}
            highScore={highScore}
          />

          {/*
          <PlayerList
            players={this.state.players}
            handleScoreChange={this.handleScoreChange}
            handleRemovePlayer={this.handleRemovePlayer}
            highScore={highScore}
          />
          */}


          <AddPlayerForm addPlayer={ this.handleAddPlayer }/>
        </div>
      </Provider>
    );
  }
}

export default App;
