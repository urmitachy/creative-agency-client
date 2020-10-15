import React from 'react';
import { Link } from 'react-router-dom';
import './SubjectDetail.css'

const SubjectDetail = (props) => {
    const { title, description, authorImg } = props.service;
    console.log(title, description, authorImg);
    return (
        <div className="card  border-0 box mt-5 card-header">
            <a href={"/order/" + title} style={{ textDecoration: "none", color: "black"}}>
                <div className="d-flex  align-items-center ">
                    <img className="mx-auto mt-2" src={`data:image/png;base64,${authorImg.img}`} alt="" width="60" />
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