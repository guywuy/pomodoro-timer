import React, { Component } from 'react';
import {Timesetter} from './Timesetter';
import {Pomodoro} from './Pomodoro';

class App extends Component {
  constructor(){
    super();

    //Times are in seconds.
    this.state= {
      'timeRemaining' : 1200,
      'pomodoroTime' : 1200,
      'breakTime' : 300,
      'inProgress' : false,
      'breakOrPomo' : 'Pomodoro'
    }
    this.pomoClicked = this.pomoClicked.bind(this);
    this.timerEnded = this.timerEnded.bind(this);
    this.increaseTime = this.increaseTime.bind(this);
    this.decreaseTime = this.decreaseTime.bind(this);

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

  // Increment the amount of time set (default is by 60seconds)
  //Updates the time remaining IFF countdown is not in progress, and the altered value is the same as the current state
  increaseTime(whichTime, amount=60){
    this.setState((prevState)=>{
      if (whichTime==='Pomodoro'){
        return {
          pomodoroTime : prevState.pomodoroTime + amount,
          timeRemaining : (this.state.inProgress&&(this.state.breakOrPomo==='Break')) ? this.state.timeRemaining : prevState.pomodoroTime + amount
        }
      } else {
        return {
          breakTime : prevState.breakTime + amount
          // timeRemaining : (this.state.inProgress&&(this.state.breakOrPomo==='Pomodoro')) ? this.state.timeRemaining : prevState.breakTime + amount
        }
      }
    });
  }

  // Decrement the amount of time set (default is by 60seconds)
  decreaseTime(whichTime, amount=60){
    this.setState((prevState)=>{
      if (whichTime==='Pomodoro'){
        return {
          pomodoroTime : prevState.pomodoroTime - amount,
          timeRemaining : (this.state.inProgress&&(this.state.breakOrPomo==='Break')) ? this.state.timeRemaining : prevState.pomodoroTime - amount
        }
      } else {
        return {
          breakTime : prevState.breakTime - amount
          // timeRemaining : (this.state.inProgress&&(this.state.breakOrPomo==='Pomodoro')) ? this.state.timeRemaining : prevState.breakTime - amount
        }
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Timesetter className="breaktime-setter" time={this.state.breakTime} label="Break" onIncrement={this.increaseTime} onDecrement={this.decreaseTime} />
        <Timesetter className="countdown-setter" time={this.state.pomodoroTime} label="Pomodoro"  onIncrement={this.increaseTime} onDecrement={this.decreaseTime} />
        <Pomodoro className="pomodoro-container" time={this.state.pomodoroTime} timeRemaining={this.state.timeRemaining} currentLabel={this.state.breakOrPomo} inProgress={this.state.inProgress} handleClick={this.pomoClicked}/>
      </div>
    );
  }
}

export default App;
