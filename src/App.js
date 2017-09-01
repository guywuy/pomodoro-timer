import React, { Component } from 'react';
import {Timesetter} from './Timesetter';
import {Pomodoro} from './Pomodoro';

class App extends Component {
  constructor(){
    super();

    //Times are in seconds.
    this.state= {
      'pomodoroTime' : 200,
      'breakTime' : 60,
      'inProgress' : false,
      'breakOrPomo' : 'Pomodoro'
    }
    this.pomoClicked = this.pomoClicked.bind(this);
  }

  pomoClicked(){
    this.setState((prevState)=>{
      return {
        'inProgress' : !prevState.inProgress
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Timesetter className="breaktime-setter" time={this.state.breakTime} label="Break" />
        <Timesetter className="countdown-setter" time={this.state.pomodoroTime} label="Pomodoro" />
        <Pomodoro className="countdown-setter" time={this.state.pomodoroTime} currentLabel={this.state.breakOrPomo} status={this.state.inProgress} handleClick={this.pomoClicked}/>
      </div>
    );
  }
}

export default App;
