import React from 'react';
import './SubjectDetail.css'

const SubjectDetail = (props) => {
    const { title, description, authorImg } = props.service;
    console.log(title, description, authorImg);
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2 card border-0 box mt-5 card-header">
            <a href={"/order/" + title} style={{ textDecoration: "none", color: "black"}}>
                <div className="img-header d-flex justify-content-center">
                    <div><img className="mx-auto mt-2" style={{ height: '100px', width: '100px' }} src={`data:image/png;base64,${authorImg.img}`} alt="" /></div>                    
                </div>
                <div className="card-body text-center">
                    <h5>{title}</h5>
                    <p className="card-text text-secondary mt-4">{description}</p>
                </div>
            </a> 
        </div>



    );
};

export default SubjectDetail;