import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import ServiceList from '../ServiceList/ServiceList';
import SidebarAdmin from '../SidebarAdmin/SidebarAdmin';

const AdminDashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState([]);
    
    useEffect(() => {
        fetch('https://stormy-anchorage-31653.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    console.log( isAdmin);
    return (
        <div>
            {isAdmin ? <SidebarAdmin isAdmin={isAdmin}/> : <div>{alert('Unauthorised access')} <Redirect to={"/"} storage={sessionStorage.clear()}></Redirect></div>}  
        </div>
    );
};

export default AdminDashboard;