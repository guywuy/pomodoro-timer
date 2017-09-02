import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {formatTime} from './TimeFormatter';
import {AlterTimeButton} from './AlterTimeButton';

export class Timesetter extends Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log();
    return (
      <div className="timesetter" id={this.props.label}>
        <p className="timesetter-time-display">{formatTime(this.props.time, 'mins')}</p>
        <AlterTimeButton onClick={this.props.onDecrement} label={'less'} which={this.props.label} />
        <p className="timesetter-label">{this.props.label}</p>
        <AlterTimeButton onClick={this.props.onIncrement} label={'more'} which={this.props.label} />
      </div>
    );
  }
}

Timesetter.propTypes = {
  time : PropTypes.number,
  label : PropTypes.string,
  onIncrement : PropTypes.func,
  onDecrement : PropTypes.func
}
