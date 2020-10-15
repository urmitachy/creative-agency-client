import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SidebarAdmin from '../SidebarAdmin/SidebarAdmin';
import ServiceDataTable from './ServiceDataTable';

const ServiceList = ({isAdmin}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    console.log(isAdmin);

    useEffect(() => {
        fetch('http://localhost:5000/orders', {
            method: 'GET',
            headers: { 'content-type': 'application/json',
                        authorization: isAdmin},
            // body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <SidebarAdmin />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Service List</h5>
                <ServiceDataTable orders={orders} />
            </div>

        </div>
    );
};

export default ServiceList;