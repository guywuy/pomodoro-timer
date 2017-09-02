import React, { Component } from 'react';
import {Timesetter} from './Timesetter';
import {Pomodoro} from './Pomodoro';

class App extends Component {
  constructor(){
    super();

    //Times are in seconds.
    this.state= {
      'pomodoroTime' : 1200,
      'timeRemaining' : 1200,
      'breakTime' : 300,
      'inProgress' : false,
      'breakOrPomo' : 'Pomodoro'
    }
    this.pomoClicked = this.pomoClicked.bind(this);
    this.timerEnded = this.timerEnded.bind(this);

    var intervalTimer;

  }

  pomoClicked(){
    this.state.inProgress ? this.pauseTimer() : this.startTimer();
    this.setState((prevState)=>{
      return {
        'inProgress' : !prevState.inProgress
      }
    });
  }

  startTimer(){
    this.intervalTimer = setInterval(()=>{
      if (this.state.timeRemaining<=1){
        this.timerEnded();
      } else {
        this.setState((prevState)=>{
          return {
            'timeRemaining' : --prevState.timeRemaining
          }
        })
      }
    }, 1000)
  }

  pauseTimer(){
    console.log('Should be cancelling timer!');
    clearInterval(this.intervalTimer);
  }

  timerEnded(){
    alert('Timer Ended!');
    this.setState((prevState)=>{
      //If it was on pomodoro countdown, change 'breakOrPomo' to 'Break', change timeRemaining to breakTime,
      // else, change to pomo, change timeRemainiing to PomodoroTime
      if (prevState.breakOrPomo==='Pomodoro'){
        return {
          'breakOrPomo' : 'Break',
          'timeRemaining' : prevState.breakTime
        }
      } else {
        return {
          'breakOrPomo' : 'Pomodoro',
          'timeRemaining' : prevState.pomodoroTime
        }
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Timesetter className="breaktime-setter" time={this.state.breakTime} label="Break" />
        <Timesetter className="countdown-setter" time={this.state.pomodoroTime} label="Pomodoro" />
        <Pomodoro className="pomodoro-container" time={this.state.pomodoroTime} timeRemaining={this.state.timeRemaining} currentLabel={this.state.breakOrPomo} inProgress={this.state.inProgress} handleClick={this.pomoClicked}/>
      </div>
    );
  }
}

export default App;
