import React from 'react';
import { useState } from 'react';
import B from './B';
import myContext from './context';
const A = () => {
    const [data, setData]=useState(" geekster");
  return (
    <div>
        <h2>A components</h2>
        <button onClick={()=>{setData("Bangalore")}}>Send data to D</button>
        <myContext.Provider value={data}>
        <B/>
        </myContext.Provider>
    
    </div>
  )
}

export default A