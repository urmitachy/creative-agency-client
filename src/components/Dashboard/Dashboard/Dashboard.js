import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import OrderDetails from '../OrderDetails/OrderDetails';
import { Link, useHistory, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faHome, faShoppingCart, faShoppingBasket, faCommentAlt, } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../imge/images/logos/Group 1367.png'
import Service from '../Service/Service';
import Review from '../Review/Review';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "auto",
    width: "auto"
}
const Dashboard = () => {    
    const { title } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [clickedItem, setClickedItem] = useState('order');
    
    let history = useHistory();
    const signOut = () => {
        setLoggedInUser({});
        localStorage.clear();
        sessionStorage.clear();
        history.push("/");
    }

    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                        <ul className="list-unstyled">
                            <li><img src={logo} style={{ width: "100px" }} alt="" /></li>
                            <li >
                                <Link to="/" className="text-dark">
                                    <FontAwesomeIcon icon={faHome} /> <span onClick={signOut} >Home</span>
                                </Link>
                            </li>
                            <li className={clickedItem === 'order' ? 'm-3 active' : 'm-3'}>
                                <Link to="/#services"  className="text-dark">
                                    <FontAwesomeIcon icon={faShoppingCart} /> <span onClick={signOut} >Order</span>
                                </Link>
                            </li>
                            <li className={clickedItem === 'service' ? 'm-3 active' : 'm-3'}>
                                <Link  className="text-dark">
                                    <FontAwesomeIcon icon={faShoppingBasket} /> <span onClick={() => setClickedItem('service')}>Service</span>
                                </Link>
                            </li>
                            <li className={clickedItem === 'review' ? 'm-3 active' : 'm-3'}>
                                <Link  className="text-dark">
                                    <FontAwesomeIcon icon={faCommentAlt} /> <span onClick={() => setClickedItem('review')}>Review</span>
                                </Link>
                            </li>
                        </ul>
                        <div>
                            <Link className="text-dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span onClick={signOut}>Logout</span></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-10 col-sm-6 col-12 pt-5">
                    <div class="d-flex bd-highlight mb-3">
                        <div class="mr-auto p-2 bd-highlight">Orders</div>
                        <div class="p-2 bd-highlight"><img src={loggedInUser.photo} width="50px" height="auto" alt="" /></div>
                        <div class="p-2 bd-highlight">{loggedInUser.name}</div>
                    </div>
                    <div style={containerStyle}>                        
                        {clickedItem === 'order' && <OrderDetails title={title}/>}
                        {clickedItem === 'service' && <Service/>}
                        {clickedItem === 'review' && <Review/>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;