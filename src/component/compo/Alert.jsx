import React from "react";
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './Alert.css';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

const Alert = ({ type, message, icon, duration }) => {
  const alertClasses = {
    success: "alert alert-success",
    notSuccess: "alert alert-danger",
  };

  return (
    <div className={alertClasses[type]}>
      
      <FontAwesomeIcon icon={icon} className="circle bg-success text-white p-1" />
      
    &nbsp; { message}
    <span id="alert-close" onClick={() => setTimeout(() => document.getElementById("alert").remove(), duration)}>
    &nbsp; &nbsp; &nbsp; <i className="fas fa-times me-5"></i>
    </span>
      
   
  </div>
  );
};

export default Alert;