import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faHome, faShoppingCart, faShoppingBasket, faCommentAlt, } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import logo from '../../../imge/images/logos/Group 1367.png'
import { UserContext } from '../../../App';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    const signOut = () => {
        setLoggedInUser({});
        localStorage.clear();
        sessionStorage.clear();
        history.push("/home");
    }
    
    return (

        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li><img src={logo} style={{ width: "100px" }} alt="" /></li>
                <li>
                    <Link to="/" className="text-dark">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="text-dark">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/service" className="text-dark">
                        <FontAwesomeIcon icon={faShoppingBasket} /> <span>Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addReview" className="text-dark">
                        <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                    </Link>
                </li>                
            </ul>
            <div>
                {/* <button onClick={() => setLoggedInUser({})}>Logout</button> */}
                <Link to="/" className="text-dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span onClick={signOut}>Logout</span></Link>
            </div>
        </div>

    );
};

export default Sidebar;