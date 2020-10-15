import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import { UserContext } from '../../../App';
import logo from '../../../imge/images/logos/Group 1367.png';
import './Navbar.css';
import { useHistory, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const signOut = () => {
    firebase.auth().signOut()
      .then(res => {
        const signedOutUser = {
          isSignedIn: false,
          name: '',
          email: '',
          photo: '',
          error: '',
          success: false
        }
        const redirect = false;
        setLoggedInUser(signedOutUser);
        localStorage.clear();
        sessionStorage.clear();
        if (redirect) {
          history.replace(from)
        }
      }).catch(err => {
        // An error happened.
      });
  }
  return (
    <nav className="container navbar navbar-expand-lg navbar-light">
      <img src={logo} style={{ width: "15%" }} alt="" />
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link mr-4" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-4" href="#">Our Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-4" href="#">Our Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-4" href="#">Contact Us</a>
          </li>

          {loggedInUser.isSignedIn ? <div className="dropdown">
            <button className="dropbtn" onClick={signOut}>Log Out</button>
          </div> :
            <div className="dropdown">
              <button className="dropbtn">Log In</button>
              <div className="dropdown-content">
                <a href="/dashboard">Dashboard</a>
                <a href="/admin">Admin</a>
              </div>
            </div>}



          {/* <Link to="/login">
            <button style={{ width: "100px" }} type="button" className="btn btn-dark">Log In</button>
          </Link> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;