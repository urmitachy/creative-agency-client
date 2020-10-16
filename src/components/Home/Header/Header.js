import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className = "backgroundImg col-12 col-sm-12 col-md-6 col-lg-12 ">
          <Navbar></Navbar>  
          <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;