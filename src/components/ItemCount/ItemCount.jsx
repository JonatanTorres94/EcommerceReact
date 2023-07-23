
import React, { useState } from 'react';

export const ItemCount = ({max, counter, setCounter,adding}) => {

    const handleSubtract = () =>{
        counter > 1 && setCounter(counter - 1)
    }
    const handlePlus = () =>{
        counter < max && setCounter(counter + 1)
    }


  return (
    <div className="flex items-center justify-center" style={{margin: '5px'}}>
      <button onClick={handleSubtract} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">-</button>
      <span className="bg-green-500 text-white font-semibold py-2 px-4 rounded" style={{margin:'3px'}}> {counter} </span>
      <button onClick={handlePlus} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">+</button>
      <button onClick={adding} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" style={{margin:'10px', display:'inline-block'}}>Agregar</button>
    </div>
  );
};
