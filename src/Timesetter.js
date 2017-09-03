import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {formatTime} from './TimeFormatter';
import {AlterTimeButton} from './AlterTimeButton';
import {TimesetInput} from './TimesetInput';

export class Timesetter extends Component {
  constructor(props){
    super(props);
    this.state = {
      editing : false
    }
    this.makeEditable=this.makeEditable.bind(this);
    this.inputEnded=this.inputEnded.bind(this);
  }

  makeEditable(){
    this.setState({
      editing : true
    });
  }

  inputEnded(){
    this.setState({
      editing : false
    });
  }

  render() {
    let display = <p className="timesetter-time-display" onClick={this.makeEditable} >{formatTime(this.props.time, 'mins')}</p>
    let edit = <TimesetInput which={this.props.label} time={this.props.time} onChange={this.props.onTimeSet} finished={this.inputEnded}/>
    let displayOrEdit = this.state.editing ? edit : display;
    return (
      <div className="timesetter" id={this.props.label}>
        {displayOrEdit}
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
