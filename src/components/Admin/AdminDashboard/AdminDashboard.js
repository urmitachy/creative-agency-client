import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../../App';
import Home from '../../Home/Home/Home';
import Login from '../../Login/Login';
import ServiceList from '../ServiceList/ServiceList';
import SidebarAdmin from '../SidebarAdmin/SidebarAdmin';

const AdminDashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
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
            {isAdmin ? <div><SidebarAdmin/><ServiceList isAdmin={isAdmin}/></div> : <Home/>}           
        </div>
    );
};

export default AdminDashboard;