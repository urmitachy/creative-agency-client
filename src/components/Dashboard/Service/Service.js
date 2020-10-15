import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "95vh",
    width: "auto"
}

const Service = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}` }
        } )
            .then(res => res.json())
            .then(data => setOrders(data))

    }, []);
    console.log(orders)
    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div style={containerStyle} className="card-deck col-md-10 col-sm-6 col-12 pt-5">
                    {
                        orders.map(orders => <ServiceDetail orders={orders} key={orders._id} />)
                    }
                </div>
            </div>

        </section>
    );
};

export default Service;