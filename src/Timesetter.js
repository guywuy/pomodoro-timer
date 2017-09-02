import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {formatTime} from './TimeFormatter';

export class Timesetter extends Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log();
    return (
      <div className="timesetter" id={this.props.label}>
        <p className="timesetter-time-display">{formatTime(this.props.time, 'mins')}</p>
        <p className="timesetter-label">{this.props.label}</p>
      </div>
    );
  }
}

Timesetter.propTypes = {
  time : PropTypes.number,
  label : PropTypes.string
}
