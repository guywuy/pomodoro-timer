import React from 'react';
import PropTypes from 'prop-types';
import {formatTime} from './TimeFormatter';

export function TimesetInput(props) {

  function handleChange(ev){
    console.log('inputtime = ' + ev.target.value*60);
    props.onChange(props.which, ev.target.value*60);
  }

  return (
    <form>
      <input type='number' className='timesetter-time-set-input' value={props.time/60} placeholder={props.time/60} onInput={handleChange} onChange={handleChange} />
      <span className='timesetter-time-unit'>min</span>
    </form>
  )
}

TimesetInput.propTypes = {
  time : PropTypes.number,
  which : PropTypes.string,
  onChange : PropTypes.func
}


// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import {formatTime} from './TimeFormatter';
//
// export class TimesetInput extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       'time': this.props.time
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }
//
//   handleChange(ev){
//     console.log('inputtime = ' + ev.target.value*60);
//     this.props.onChange(this.props.which, ev.target.value*60);
//   }
//
//   componentWillReceiveProps(nextProps) {
//     this.setState({'time': nextProps.time});
//   }
//
//   render(){
//     let timeValue = this.state.time/60;
//     return (
//       <form>
//         <input type='number' className='timesetter-time-set-input' value={timeValue} onInput={this.handleChange} />
//         <span className='timesetter-time-unit'>m</span>
//       </form>
//     )
//   }
// }
//
// TimesetInput.propTypes = {
//   time : PropTypes.number,
//   which : PropTypes.string,
//   onChange : PropTypes.func
// }
