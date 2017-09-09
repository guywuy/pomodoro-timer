//Export function that receives an integer as a parameter, and outputs a string in format xh xm xs, xm xs or just xm

export function formatTime(time, detail='full'){
  let minutes = Math.floor(time/60);
  let seconds = time%60;
  if (detail==='full'){
    // let hours = Math.floor(time/60/60);
    return `${minutes}m ${seconds}s`;
  } else if (detail==='mins'){
    return `${minutes}m`;
  } else {
    return `${minutes}m ${seconds}s`;
  }
}
