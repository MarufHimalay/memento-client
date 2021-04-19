import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { loggedInUserContext, UserContext } from '../../../App';
import { Redirect, useHistory, useLocation } from 'react-router-dom';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(loggedInUserContext);
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const { displayName, photoURL, email } = result.user;
        const signedInUser = {
          role: "user",
          name: displayName,
          email
        }
        history.replace(from);
        setLoggedInUser(signedInUser);
      }).catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
    const url = `http://localhost:5055/users`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(loggedInUser)
    })
      .then(res => {
        console.log('server side response', res)
        setUser(loggedInUser)
        console.log(loggedInUser);
      })
  };
  return (
    <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
          <div className="from-group mt-5">
            <button className="btn btn-primary" onClick={handleGoogleSignIn}>Google Sign in</button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
        </div>
      </div>
    </div>
  );
};

export default Login;