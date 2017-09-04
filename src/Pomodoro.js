import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {formatTime} from './TimeFormatter';

export class Pomodoro extends Component {
  constructor(props){
    super(props);
  }


  render() {
    let msg = !this.props.inProgress ? 'Start' : 'Pause';
    let pomoActive = this.props.inProgress ? ' active' : '';
    let labelBig = '';
    let timeHidden = '';
    let resetButtonHidden = '';

    if ((!this.props.inProgress) && (this.props.time===this.props.timeRemaining)){
      labelBig = ' big';
      timeHidden = ' hidden';
      resetButtonHidden = ' hidden';
    }

    let percentComplete = this.props.timeRemaining/this.props.time*100;
    let gradient = {
      background: `linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,0) ${percentComplete}%, green ${percentComplete+3}%)`
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
