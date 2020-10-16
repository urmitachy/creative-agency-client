import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const ServiceDataTable = ({ orders }) => {
    const [status, setStatus] = useState(false);
    console.log(orders);
    let history = useHistory();

    const handleChange = (id, e) => {
        const status = e.target.value;
        const order = { id, status };

        fetch(`https://stormy-anchorage-31653.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Status Updated successfully');
                    setStatus(true);
                }                
            })
    }
    useEffect(() => {},[status]);

    return (
        // <div style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <table className="table table-borderless" style={{ backgroundColor: "#F4FDFB" }}>
            <thead>
                <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email ID</th>
                    <th className="text-secondary" scope="col">Service</th>
                    <th className="text-secondary" scope="col">Project Details</th>
                    <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((order, index) =>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.orderName}</td>
                            <td>{order.projectDetails}</td>
                            <td>
                                <select className={(order.status === "Done" && "btn text-success") ||
                                    (order.status === "Pending" && "btn text-danger") ||
                                    (order.status === "On going" && "btn text-warning")}
                                    name="status" value={order.status}
                                    onChange={(e) => handleChange(order._id, e)} >
                                    <option className="dropdown-item" value="Done">Done</option>
                                    <option className="dropdown-item" value="Pending">Pending</option>
                                    <option className="dropdown-item" value="On going">On going</option>
                                </select>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        // </div>
        
    );
};

export default ServiceDataTable;