import { faListAlt, faPlus, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../imge/images/logos/Group 1367.png';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddService from '../ServiceList/AddService';
import ServiceList from '../ServiceList/ServiceList';

const SidebarAdmin = ({ isAdmin }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [click, setClick] = useState('serviceList');
    console.log(isAdmin)

    let history = useHistory();
    
    const signOut = () => {
        setLoggedInUser({});
        localStorage.clear();
        sessionStorage.clear();
        history.push("/");
    }
    return (
        <div className="container-fluid row">
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled">
                    <li><img src={logo} style={{ width: "100px" }} alt="" /></li>
                    <li>
                        <Link className="text-dark">
                            <FontAwesomeIcon icon={faListAlt} /> <span onClick={() => setClick('serviceList')} >Service list</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="text-dark">
                            <FontAwesomeIcon icon={faPlus} /> <span onClick={() => setClick('addService')}>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="text-dark">
                            <FontAwesomeIcon icon={faUserPlus} /> <span onClick={() => setClick('makeAdmin')}>Make Admin</span>
                        </Link>
                    </li>
                </ul>
                <div>
                    <Link to="/" className="text-dark"><FontAwesomeIcon icon={faSignOutAlt}/> <span onClick={signOut}>Logout</span></Link>
                </div>
            </div>
            <div >
            {click === 'serviceList' && 
            <ServiceList isAdmin={isAdmin} />}
            {click === 'makeAdmin' && <MakeAdmin />}
            {click === 'addService' && <AddService />}
            </div>
           
        </div>
    );
};

export default SidebarAdmin;