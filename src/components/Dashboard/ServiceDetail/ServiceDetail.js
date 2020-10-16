import React from 'react';
import './ServiceDetails.css';

const ServiceDetail = (props) => {
    const { orderName, description, authorImg, status } = props.orders;
    return (
        <div className="bg-white col-10 offset-1 col-md-5 offset-md-1 card border-0 px-2 py-2 my-2">
            <div className=" border-0 p-0 d-flex  justify-content-between">
                <div><img style={{ height: '100px', width: '100px' }} src={`data:image/png;base64,${authorImg}`} alt="" /></div>
                <div style={{ height: '50px' }} className="my-2">
                    {status === 'Pending' && <button className="btn btn-danger">{status}</button>}
                    {status === 'On Going' && <button className="btn btn-warning">{status}</button>}
                    {status === 'Done' && <button className="btn btn-success">{status}</button>}
                </div>
            </div>
            <div className="card-body text-justify">
                <h5 className="text-dark font-weight-bold">{orderName}</h5>
                <p className='text-secondary mt-3'>{description}</p>
            </div>
        </div>













    );
};

export default ServiceDetail;