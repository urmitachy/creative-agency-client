import { faListAlt, faPlus, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../imge/images/logos/Group 1367.png';

const SidebarAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>            
            <ul className="list-unstyled">
                <li><img src={logo} style={{ width: "100px" }} alt="" /></li>
                <li>
                    <Link to="/servicelist" className="text-dark">
                        <FontAwesomeIcon icon={faListAlt} /> <span>Service list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-dark">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/makeAdmin" className="text-dark">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
            </ul>
            <div>
                {/* <button onClick={() => setLoggedInUser({})}>Logout</button> */}
                <Link to="/" className="text-dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>


        </div>
    );
};

export default SidebarAdmin;