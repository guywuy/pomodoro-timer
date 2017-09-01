import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Pomodoro extends Component {
  constructor(props){
    super(props);
  }


  render() {
    let msg = !this.props.inProgress ? 'Start' : '';
    return (
      <div className="pomodoro" onClick={this.props.handleClick} >
        <p className="pomodoro-time-display">{this.props.time}</p>
        <p>{msg}</p>
      </div>
    );
  }
}

Pomodoro.propTypes = {
  "handleClick" : PropTypes.func,
  "time" : PropTypes.number,
  "currentLabel" : PropTypes.boolean,
  "status" : PropTypes.boolean
}
