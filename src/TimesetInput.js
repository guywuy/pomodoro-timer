import React from 'react';
import PropTypes from 'prop-types';
import {formatTime} from './TimeFormatter';

export function TimesetInput(props) {

  function handleChange(ev){
    console.log('inputtime = ' + ev.target.value*60);
    props.onChange(props.which, ev.target.value*60);
  }

  function handleSubmit(ev){
    ev.preventDefault();
    props.onChange(props.which, ev.target.value*60);
    //props.finished();
    return false;
  }

  return (
    <form>
      <input type='number' className='timesetter-time-set-input' autoFocus defaultValue={props.time/60} placeholder={props.time/60} onInput={handleChange} onSubmit={handleSubmit} />;
    </form>
  )
}

TimesetInput.propTypes = {
  time : PropTypes.number,
  which : PropTypes.string,
  onChange : PropTypes.func,
  finished : PropTypes.func
}
