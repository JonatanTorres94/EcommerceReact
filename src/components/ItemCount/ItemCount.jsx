import React, { useState } from 'react';
import Notifications from "../Notifications/Notifications"

export const ItemCount = ({ max, counter, setCounter, adding }) => {

  const handleSubtract = () => {
    counter > 1 && setCounter(counter - 1)
  }
  const handlePlus = () => {
    counter < max && setCounter(counter + 1)
  }


  return (
    <div className="flex items-center justify-center" style={{ margin: '5px' }}>
      <button onClick={handleSubtract} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">-</button>
      <span className="bg-green-500 text-white font-semibold py-2 px-4 rounded" style={{ margin: '3px' }}> {counter} </span>
      <button onClick={handlePlus} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" style={{marginRight:'5px'}}>+</button>
  
      <Notifications 
      message={counter !==0 ? 'Producto agregado exitosamente' : 'Sin Stock'} 
      type={counter !== 0 ? 'success' : 'error'} 
      onClick={adding}>
        Agregar
      </Notifications>


    </div>
  );
};
