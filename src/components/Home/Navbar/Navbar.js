import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../imge/images/logos/Group 1367.png';
import './Navbar.css';

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <nav className="container navbar navbar-expand-lg navbar-light">
      <img src={logo} style={{ width: "15%" }} alt="" />
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link mr-4" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-4" href="#">Our Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-4" href="#">Our Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-4" href="#">Contact Us</a>
          </li>

          <div class="dropdown">
            <button class="dropbtn">Log In</button>
            <div class="dropdown-content">
              <a href="/dashboard">Dashboard</a>
              <a href="/admin">Admin</a>              
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">Log Out</button>                         
          </div>
          

          {/* <Link to="/login">
            <button style={{ width: "100px" }} type="button" class="btn btn-dark">Log In</button>
          </Link> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;