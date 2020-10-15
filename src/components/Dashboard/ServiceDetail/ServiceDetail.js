import React from 'react';

const ServiceDetail = (props) => {
    const { orderName, description, authorImg } = props.orders;
    return (
        <div>
            <div className="card mb-3" style={{ width: "300px", border: "none" }} >
                <img src={`data:image/png;base64,${authorImg}`} className="mx-auto mt-3" style={{ width: "100px" }} alt="" />
                <div class="card-body">
                    <h5>{orderName}</h5>
                    <p class="card-text">{description}</p>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetail;