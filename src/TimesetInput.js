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
