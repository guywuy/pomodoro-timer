import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Timesetter extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="timesetter" id={this.props.label}>
        <p className="timesetter-time-display">{this.props.time}</p>
        <p className="timesetter-label">{this.props.label}</p>
      </div>
    );
  }
}

Timesetter.propTypes = {
  time : PropTypes.number,
  label : PropTypes.string
}
