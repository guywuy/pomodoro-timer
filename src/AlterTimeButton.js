import React from 'react';
import PropTypes from 'prop-types';

export function AlterTimeButton(props) {

  function handleClick(ev){
    return props.onClick(props.which);
  }

  return <button className={"button-alter-time " + props.label} onClick={handleClick}>{props.label}</button>
}

AlterTimeButton.propTypes = {
  which : PropTypes.string,
  label : PropTypes.string,
  onClick : PropTypes.func
}
