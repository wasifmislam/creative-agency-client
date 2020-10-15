import React, { useContext } from 'react';
import GoogleButton from 'react-google-button';
import logo from '../../images/logo.png';

const Login = () => {
  
   const  handleGoogleSignIn = () => {
         
     }
     

  return (
      
    <div className="login-page container ">
        <div className="text-center">
        <img class=" mt-5 ml-5" style={{width:'150px', height:'47px'}} src={logo} alt=""/>
        </div>
        
      <div className="row align-items-center text-center " style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
        
         
           <h2>Login with</h2>
          <div className="from-group mt-5">
            <GoogleButton  onClick={handleGoogleSignIn} variant="primary" type="submit"></GoogleButton>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Login;