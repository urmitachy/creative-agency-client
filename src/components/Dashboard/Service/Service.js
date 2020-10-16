import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "auto",
    width: "90%"
}

const Service = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://stormy-anchorage-31653.herokuapp.com/orders?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))

    }, []);
    console.log(orders)
    return (
        <div className="col-md-10 col-sm-6 col-12 ">            
            <div className="row" style={containerStyle}>
                {
                    orders.map(orders => <ServiceDetail orders={orders} key={orders._id} />)
                }
            </div>

        </div>
    );
};

export default Service;