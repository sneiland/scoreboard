import React, { Component } from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {

  prevPlayerId = 4;

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

  render(){
    return (
      <ScoreboardContext.Provider value={{
        players:this.state.players,
        actions: {
          changeScore: this.handleScoreChange,
          removePlayer: this.handleRemovePlayer,
          addPlayer: this.handleAddPlayer,
          getHighScore: this.getHighScore
        }
      }}>

      { this.props.children }
      </ScoreboardContext.Provider>
    );
  }
}

export const Consumer = ScoreboardContext.Consumer;
