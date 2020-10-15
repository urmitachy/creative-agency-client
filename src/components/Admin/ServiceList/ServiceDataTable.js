import React from 'react';

const ServiceDataTable = ({orders}) => {
    return (
        <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Email ID</th>
            <th className="text-secondary" scope="col">Service</th>
            <th className="text-secondary" scope="col">Project Details</th>
            {/* <th className="text-secondary" scope="col">Phone</th>
            <th className="text-secondary" scope="col">Email</th> */}
            </tr>
        </thead>
        <tbody>
            {
              orders.map((orders, index) => 
                    
                <tr>
                    <td>{index + 1}</td>
                    <td>{orders.name}</td>
                    <td>{orders.email}</td>
                    <td>{orders.orderName}</td>
                    <td>{orders.projectDetails}</td>
                    {/* <td>{appointment.phone}</td>
                    <td>{appointment.email}</td> */}
                </tr>
                )
            }
        </tbody>
    </table>
    );
};

export default ServiceDataTable;