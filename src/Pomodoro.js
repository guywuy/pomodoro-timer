import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {formatTime} from './TimeFormatter';

export class Pomodoro extends Component {

  render() {
    let msg = !this.props.inProgress ? 'Start' : 'Pause';
    let pomoActive = this.props.inProgress ? ' active' : '';
    let labelBig = '';
    let timeHidden = '';
    let resetButtonHidden = '';

    let percentComplete = this.props.timeRemaining/this.props.time*100;
    // let percentCompleteDeg = 360-this.props.timeRemaining/this.props.time*360;
    let gradient = {
      background: `linear-gradient(to bottom, #ff6e6e 0%, #f33737 ${percentComplete}%, ${this.props.currentLabel==='Break' ? 'rgb(247, 195, 0)' : 'rgb(70, 162, 70)'} ${percentComplete+3}%)`,
      // backgroundImage : 'linear-gradient(' + percentCompleteDeg + 'deg, transparent 50%, #A2ECFB 50%),linear-gradient(0deg, #A2ECFB 50%, transparent 50%)'
    }


    if ((!this.props.inProgress) && (this.props.time===this.props.timeRemaining)){
      labelBig = ' big';
      timeHidden = ' hidden';
      resetButtonHidden = ' hidden';
      gradient={};
    }

    return (
      <div>
        <div className={"pomodoro" + pomoActive} style={gradient} onClick={this.props.handleClick} >
          <p className={"pomodoro-time-display" + timeHidden}>{formatTime(this.props.timeRemaining || this.props.time, "full")}</p>
          <p className={"pomodoro-label" + labelBig}>{msg}</p>
        </div>
        <button className={"reset-button" + resetButtonHidden} onClick={this.props.handleReset}>Reset</button>
      </div>
    );
  }
}

Pomodoro.propTypes = {
  "handleClick" : PropTypes.func,
  "handleReset" : PropTypes.func,
  "time" : PropTypes.number,
  "timeRemaining" : PropTypes.number,
  "currentLabel" : PropTypes.string,
  "inProgress" : PropTypes.bool
}
