import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notifications = ({ message, type, onClick, children }) => {

const [showNotification, setShowNotification] = useState(false)
  const showToast = () => {
    setShowNotification (true)
    toast[type](message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000,
      onClose: () => setShowNotification(false),
    });
    if (onClick) {
        setTimeout(onClick,5000);
      }
  };

//   const handleOnClick = () => {
//     showToast(); // Mostrar la notificación antes de ejecutar la función onClick
//     if (onClick) {
//         setTimeout(onClick,500)
//     }
//   };

  return (
    <div>
    <button
      onClick={showToast}
      className={`bg-${type === 'success' ? 'green' : 'red'}-500 hover:bg-${
        type === 'success' ? 'green' : 'red'
      }-600 text-white font-semibold py-2 px-4 rounded`}
    >
      
      {children}
      
    </button>
    <ToastContainer />
    </div>
  );
};

export default Notifications;
