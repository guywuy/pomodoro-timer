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
    return (
      <div className={"pomodoro" + pomoActive} onClick={this.props.handleClick} >
        <p className="pomodoro-time-display">{formatTime(this.props.timeRemaining || this.props.time)}</p>
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
