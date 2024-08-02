import React from "react";
import "./App.css";
import Stepper from "./Component/Steppers";
import { FaUser, FaAddressCard, FaCreditCard, FaCheck } from 'react-icons/fa';

function App() {
  const stepLabels = [
    'Personal Information',
    'Address Details',
    'Payment Information',
    'Review and Submit'
  ];

  const stepIcons = [
    <FaUser />,
    <FaAddressCard />,
    <FaCreditCard />,
    <FaCheck />
  ];

  return (
    <>
      <Stepper 
        size="50px"
        activeColor="#FFC300"
        inactiveColor="#FFC300"
        lineColor="#000"
        labels={stepLabels}
        icons={stepIcons}
      />
    </>
  );
}

export default App;
