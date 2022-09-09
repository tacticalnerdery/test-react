import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CloseButton = ({ closeToast }) => (
    <p>REFRESH</p>
);

function Toast(){
  const notify = () => toast("New app version available!");

  return (
    <div>
      <ToastContainer 
        position="bottom-center"
        autoClose={false}
        closeOnClick
        closeButton={CloseButton}
      />
    </div>
  );
}

export default Toast;
