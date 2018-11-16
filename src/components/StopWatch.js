import React,{Component} from 'react';

class StopWatch extends Component {

  state = {
    elapseTime: 0,
    previousTime: 0,
    isRunning: false
  };

  componentDidMount(){
    this.intervalId = setInterval( ()=> this.tick(), 100 );
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  tick = () => {
    if( this.state.isRunning ){
      const now = Date.now();
      this.setState( prevState => ({
          elapseTime: prevState.elapseTime + (now - prevState.previousTime),
          previousTime: now
        })
      );
    }
  }

  handleStopwatch = () => {
    this.setState( prevState => ({
        isRunning: !prevState.isRunning
      })
    );

    if( !this.state.isRunning ){
      this.setState({
        previousTime: Date.now()
      });
    }
  }

  handleReset = () => {
    this.setState( prevState => ({
        elapseTime: 0
      })
    );
  }

  render = () => {
    const seconds = Math.floor( this.state.elapseTime / 1000 );

    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">
          {seconds}
        </span>
        <button onClick={ this.handleStopwatch }>{this.state.isRunning ? 'Stop' : 'Start' }</button>
        <button onClick={ this.handleReset }>Reset</button>
      </div>
    );
  }

}

export default StopWatch;
