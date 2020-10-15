import React from 'react';
import './ServiceDetails.css';

const ServiceDetail = (props) => {
    const { orderName, description, authorImg, status } = props.orders;
    return (
        <div>
            <div className="card mb-3" style={{ width: "300px", border: "none" }} >
                <div class="d-flex bd-highlight mb-3">
                    <div class="ml-2 p-2 bd-highlight"><img src={`data:image/png;base64,${authorImg}`} width="50px" height="auto" alt="" /></div>                    
                    <div class="mr-2 p-2 bd-highlight"><button className="dropbtn1">{status}</button></div>
                </div>         
                <div class="card-body">
                    <h5>{orderName}</h5>
                    <p class="card-text">{description}</p>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetail;