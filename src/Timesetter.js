import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {AlterTimeButton} from './AlterTimeButton';
import {TimesetInput} from './TimesetInput';

export class Timesetter extends Component {

  render() {

    return (
      <div className="timesetter" id={this.props.label}>
        <TimesetInput which={this.props.label} time={this.props.time} onChange={this.props.onTimeSet} />
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
  onDecrement : PropTypes.func,
  onTimeSet : PropTypes.func
}
