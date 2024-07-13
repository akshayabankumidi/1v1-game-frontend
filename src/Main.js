import Login from './Login'
import Register from './Register';
import React, { useState } from 'react';
const Main = ()=>{
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
  
    const handleLoginClick = () => {
      setShowLogin(true);
      setShowRegister(false);
    };
  
    const handleRegisterClick = () => {
      setShowRegister(true);
      setShowLogin(false);
    };
    return(
        <div>  
     <button onClick={handleLoginClick}>Login</button>
     <button onClick={handleRegisterClick}>Register</button>

        {showLogin && <Login />}
        {showRegister && <Register />}
        </div>
    );
   
  
};

export default Main;