import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SidebarAdmin from '../SidebarAdmin/SidebarAdmin';
import ServiceDataTable from './ServiceDataTable';

const ServiceList = ({isAdmin}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    console.log(isAdmin)

    useEffect(() => {
        fetch('https://stormy-anchorage-31653.herokuapp.com/orders?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                 authorization: {isAdmin}
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data)
            }
                )


    }, []);
    return (
        // <div>
        //     <SidebarAdmin />
            <div className="col-md-10 p-4 pr-5">
                {/* <h5 className="text-brand">Service List</h5> */}
                <div class="d-flex bd-highlight mb-3">
                        <div class="mr-auto p-2 bd-highlight">Service List</div>
                        <div class="p-2 bd-highlight"><img src={loggedInUser.photo} width="50px" height="auto" alt="" /></div>
                        <div class="p-2 bd-highlight">User: {loggedInUser.name}</div>
                    </div>
                <ServiceDataTable orders={orders} />
            </div>

        // </div>
    );
};

export default ServiceList;