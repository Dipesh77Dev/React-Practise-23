import React from 'react'
import './chellanges.css';

const Chellange2 = () => {

  let date = new Date();
  let time = new Date();
  let todayDate = date.toLocaleDateString();
  let todayTime = time.toLocaleTimeString();

  return (
    <>
      <div id='date-time-sec'>
        <h1 className='mydate'>Today's Date = {todayDate}</h1>
        <h2 className='mytime'>Current Time = {todayTime}</h2>
      </div>
    </>
  )
}

export default Chellange2;