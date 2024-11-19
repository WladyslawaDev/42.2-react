import "./styles.css";
import MyButton from "../MyButton/MyButton";
import MyInput from "../MyInput/MyInput";

import React, { useState } from "react";

function MyLoginForm () {
 const [showMessage, setShowMessage] = useState(false);
    const handleInputChange = (e) => {
        if (e.target.value.trim() !== "") {
          setShowMessage(true);
        } else {
          setShowMessage(false);
        }
      };
 
return (
<div className ="myInput-card-wrapper">
<div className ="myInput-card-title">
Login form
</div>
<div className="input-collective-container">

<MyInput
        name="email"
        type="email"
        placeholder="Enter your email"
        label="Email"
        onChange={handleInputChange}
      />
      <MyInput
        name="password"
        type="password"
        placeholder="Enter your password"
        label="Password"
        onChange={handleInputChange}
      />
      </div>
      <MyButton name ="Login"/>
      {showMessage && <div className="hurra-message">HURRRA!!! I've done my Homework Nr.3! I wanted to make it so that the Hurrra!!! was in the middle and the rest was lost but it didn't work out.  </div>}
</div>
)
}

export default MyLoginForm;