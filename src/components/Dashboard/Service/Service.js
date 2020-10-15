import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "auto",
    width: "90%"
}

const Service = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders?email=' + loggedInUser.email, {
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
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-6 col-12 ">
                    <div class="d-flex bd-highlight mb-3">
                        <div class="mr-auto p-2 bd-highlight">Orders:</div>
                        <div class="p-2 bd-highlight"><img src={loggedInUser.photo} width="50px" height="auto" alt="" /></div>
                        <div class="p-2 bd-highlight">{loggedInUser.name}</div>
                    </div>
                    <div className="card-deck pt-5" style={containerStyle}>
                        {
                            orders.map(orders => <ServiceDetail orders={orders} key={orders._id} />)
                        }
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Service;