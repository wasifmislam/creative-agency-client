import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import GoogleButton from 'react-google-button';
import logo from '../../images/logo.png';
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig);
  }
   const  handleGoogleSignIn = () => {
    
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
     
      const {displayName, email, photoURL} = result.user;
      const signedInUser = {name: displayName, email, photo: photoURL}
      // console.log(signedInUser);
      setLoggedInUser(signedInUser);
      history.replace(from);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
         
     }
     

  return (
      
    <div className="login-page container ">
        <div className="text-center">
        <Link to='/home'><img class=" mt-5 ml-5" style={{width:'150px', height:'47px'}} src={logo} alt=""/></Link>
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