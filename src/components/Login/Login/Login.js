import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from './firebase.config';
import { UserContext }  from '../../../App'


const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: `/` } };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, photoURL, email } = result.user;
        const signedInUser = {
          name: displayName,
          email,
          image: photoURL
        }
        setLoggedInUser(signedInUser);
        console.log(loggedInUser);
        history.replace(from);
      }).catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="container text-center">
      <h2>Welcome!!</h2>
      {!loggedInUser.name && <h4>Login to continue</h4>}
      {!loggedInUser.name && <button style={{ marginTop: "10%" }} className="btn btn-primary" onClick={handleGoogleSignIn}>Sign in using Google</button>}
      
      <h3>{loggedInUser.name}</h3>
      {loggedInUser.name &&<p> Your email: {loggedInUser.email}</p>}
      <img src={loggedInUser.image} alt="" />
    </div>
  );
};

export default Login;