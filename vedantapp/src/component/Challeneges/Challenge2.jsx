import React from 'react'

const Challenge2 = () => {
  const myName = "Vedant";
  const properCurDate = new Date().toLocaleDateString();
  const properCurTime = new Date().toLocaleTimeString();

  return (
    <>
      <h1>Hello My Name is {myName}</h1>
      <h2>Current Date and Time are:</h2>
      <p> Current Date: {properCurDate}</p>
      <p> Current Time: {properCurTime}</p>
    </>
  );
};

export default Challenge2