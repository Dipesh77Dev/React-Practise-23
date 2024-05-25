import React from 'react'

const Chellange2 = () => {
  
    let date =new Date();
    let time =new Date();

    let today = date.toDateString();
    let todaystime = time.toTimeString();
    return (
    <>
    <div>
        <h1>Todays date = {today}</h1>
        <h1>Todays date = {todaystime}</h1>
    </div>
    </>
  )
}

export default Chellange2