import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import google from '../../imge/images/icons/googleLogo.png';
import logo from '../../imge/images/logos/Group 1367.png';
import './Login.css'

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = (e) => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email: email} 
            setLoggedInUser(signedInUser);
            storeAuthToken();
            console.log(signedInUser, loggedInUser);
            
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
          e.preventDefault();
    }

    
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken);
        //    console.log(idToken)
            history.replace(from);
          }).catch(function(error) {
            // Handle error
          });
    }
    return (
        <div >
        <img className='container img' src={logo} alt="Volunteer Network" /> <br/><br/>
        <div className='box-model'><h1 className = "text-center">Login with</h1>
        <br/>
            <button style = {{width : "100%"}} onClick={handleGoogleSignIn} className="pill-button"><img className= "ml-auto" src={google} alt="Google" />Continue with Google</button>
            <br/><br/>
            <p className = "text-center">Don't have an account? <span> 
            <Link>create an account</Link>
             </span></p>
            
            </div>
            
        </div>
    );
};

export default Login;
