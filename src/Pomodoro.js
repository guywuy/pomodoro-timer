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

    let percentComplete = this.props.timeRemaining/this.props.time*100;
    let gradient = {
      background: `linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,0) ${percentComplete}%, green ${percentComplete+3}%)`
    }
    return (
      <div className={"pomodoro" + pomoActive} style={gradient} onClick={this.props.handleClick} >
        <p className="pomodoro-time-display">{formatTime(this.props.timeRemaining || this.props.time, "full")}</p>
        <p className="pomodoro-label">{msg}</p>
      </div>
    );
  }
}

Pomodoro.propTypes = {
  "handleClick" : PropTypes.func,
  "time" : PropTypes.number,
  "timeRemaining" : PropTypes.number,
  "currentLabel" : PropTypes.string,
  "inProgress" : PropTypes.bool
}
