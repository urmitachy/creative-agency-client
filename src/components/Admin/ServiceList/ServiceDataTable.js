import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const ServiceDataTable = ({orders}) => {
    const [status, setStatus] = useState({});
    const { register, handleSubmit} = useForm();
    let history = useHistory();
    const onSubmit = data => {
        setStatus(data);
    }

    const updateStatus = (id) =>{
        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Status Updated successfully');
                    history.push("/admin");
                }
            })
    }
    return (
        <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Email ID</th>
            <th className="text-secondary" scope="col">Service</th>
            <th className="text-secondary" scope="col">Project Details</th>
            <th className="text-secondary" scope="col">Status</th>
            <th className="text-secondary" scope="col">Update</th>
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
                    <td>{order.status}</td>
                    <td>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <select ref={register} name="status">
                            <label>{order.status}</label>
                            <option value="Pending">Pending</option>
                            <option value="On going">On going</option>
                            <option value="Done">Done</option>
                        </select>
                        <button className="btn btn-outline-warning" type="submit">Init</button><br/>                        
                    </form>
                    <button className="btn btn-outline-info" onClick={()=> updateStatus(order._id)}><FontAwesomeIcon icon={faEdit} />Confirm Update</button>
                    </td>
                </tr>
                )
            }
        </tbody>
    </table>
    );
};

export default ServiceDataTable;