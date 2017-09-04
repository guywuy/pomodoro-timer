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
    this.resetPomodoro = this.resetPomodoro.bind(this);
    this.timerEnded = this.timerEnded.bind(this);
    this.increaseTime = this.increaseTime.bind(this);
    this.decreaseTime = this.decreaseTime.bind(this);
    this.setTime = this.setTime.bind(this);

    var intervalTimer;

  }

  //When pomodoro is clicked, pause or start the timer depending on state and change 'inProgress'
  pomoClicked(){
    this.state.inProgress ? this.pauseTimer() : this.startTimer();
    this.setState((prevState)=>{
      return {
        'inProgress' : !prevState.inProgress
      }
    });
  }

  //stop pomo and reset time remaining to pomotime and mode to pomomode
  resetPomodoro(){
    this.pauseTimer();
    this.setState({
      'inProgress' : false,
      'timeRemaining' : this.state.pomodoroTime,
      'breakOrPomo' : 'Pomodoro'
    })
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
  increaseTime(whichTime, amount=60){
    this.setState((prevState)=>{
      if (whichTime==='Pomodoro'){
        // Button pressed was from Pomodoro side
        let newPomoTime;
        //Ensure that the new time would not be more than 2 hours
        if (prevState.pomodoroTime + amount >= 7200){
          alert('Maximum 2 hours');
          newPomoTime = prevState.pomodoroTime;
        } else {
          newPomoTime = prevState.pomodoroTime + amount;
        }

        // Only update current time remaining if timer is not inProgress and mode is in Pomodoro
        let newTimeRemaining;
        if(this.state.breakOrPomo==='Pomodoro' && !this.state.inProgress){
          newTimeRemaining = newPomoTime;
        } else {
          newTimeRemaining = this.state.timeRemaining;
        }
        return {
          'pomodoroTime' : newPomoTime,
          'timeRemaining' : newTimeRemaining
        }

      } else {
        //Button was pressed on break side
        let newBreakTime;
        //Ensure that the new time would not be more than 2 hours
        if (prevState.breakTime + amount >= 7200){
          alert('Maximum 2 hours');
          newBreakTime = prevState.breakTime;
        } else {
          newBreakTime = prevState.breakTime + amount;
        }
        // Only update current time remaining if timer is not inProgress and mode is in Break
        let newTimeRemaining;
        if(this.state.breakOrPomo==='Break' && !this.state.inProgress){
          newTimeRemaining = newBreakTime;
        } else {
          newTimeRemaining = this.state.timeRemaining;
        }
        return {
          'breakTime' : newBreakTime,
          'timeRemaining' : newTimeRemaining
        }
      }
    });
  }

  // Decrement the amount of time set (default is by 60seconds)
  decreaseTime(whichTime, amount=60){
    this.setState((prevState)=>{
      if (whichTime==='Pomodoro'){
        // Button pressed was from Pomodoro side
        let newPomoTime;
        //Ensure that the new time would not be less than 1 minute
        if (prevState.pomodoroTime - amount <= 59){
          alert('Minimum 1 minute');
          newPomoTime = prevState.pomodoroTime;
        } else {
          newPomoTime = prevState.pomodoroTime - amount;
        }

        // Only update current time remaining if timer is not inProgress and mode is in Pomodoro
        let newTimeRemaining;
        if(this.state.breakOrPomo==='Pomodoro' && !this.state.inProgress){
          newTimeRemaining = newPomoTime;
        } else {
          newTimeRemaining = this.state.timeRemaining;
        }
        return {
          'pomodoroTime' : newPomoTime,
          'timeRemaining' : newTimeRemaining
        }

      } else {
        //Button changing the break time was pressed
        let newBreakTime;
        //Ensure that the new time would not be less than 1 minute
        if (prevState.breakTime - amount <= 59){
          alert('Minimum 1 minute');
          newBreakTime = prevState.breakTime;
        } else {
          newBreakTime = prevState.breakTime - amount;
        }

        // Only update current time remaining if timer is not inProgress and mode is in Break
        let newTimeRemaining;
        if(this.state.breakOrPomo==='Break' && !this.state.inProgress){
          newTimeRemaining = newBreakTime;
        } else {
          newTimeRemaining = this.state.timeRemaining;
        }
        return {
          'breakTime' : newBreakTime,
          'timeRemaining' : newTimeRemaining
        }
      }
    });
  }

  setTime(whichTime, inputTime){
    //Check time inputted is valid (>60, <7200)
    if (inputTime<60 || inputTime>7200){
      return alert('Time must be between 1 minute and 2 hours');
    } else {
      if (whichTime==='Pomodoro'){
        //User has set Pomo time. Update currenttimeremaining if in pomo state and not running, else just update pomotime
        if(this.state.breakOrPomo==='Pomodoro' && !this.state.inProgress){
          this.setState((prevState)=>{
            return {
              'pomodoroTime' : inputTime,
              'timeRemaining' : inputTime
            }
          })
        } else {
          this.setState((prevState)=>{
            return {
              'pomodoroTime' : inputTime
            }
          })
        }
      } else {
        //User has set Break time. Update currenttimeremaining if in break state and not running, else just update breaktime
        if(this.state.breakOrPomo==='Break' && !this.state.inProgress){
          this.setState((prevState)=>{
            return {
              'breakTime' : inputTime,
              'timeRemaining' : inputTime
            }
          })
        } else {
          this.setState((prevState)=>{
            return {
              'breakTime' : inputTime
            }
          })
        }
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Timesetter className="countdown-setter" time={this.state.pomodoroTime} label="Pomodoro"  onIncrement={this.increaseTime} onDecrement={this.decreaseTime} onTimeSet={this.setTime} />
        <Timesetter className="breaktime-setter" time={this.state.breakTime} label="Break" onIncrement={this.increaseTime} onDecrement={this.decreaseTime} onTimeSet={this.setTime} />
        <Pomodoro className="pomodoro-container"
        time={this.state.pomodoroTime}
        timeRemaining={this.state.timeRemaining}
        currentLabel={this.state.breakOrPomo}
        inProgress={this.state.inProgress}
        handleClick={this.pomoClicked}
        handleReset={this.resetPomodoro}
        />
      </div>
    );
  }
}

export default App;
