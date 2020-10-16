import React from 'react';
import './ClientDetail.css'



const ClientDetail = (props) => {
    const { description, author, authorImg, designation } = props.reviews;
    console.log(author)
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2 mt-1 ">
            <div className="card-body feedback">
                <div className="d-flex  align-items-center pt-2">
                    <img className="mx-3" src={authorImg} alt="" width="60" />
                    <div>
                        <h4 className="font-weight-bolder">{author}</h4>
                        <p className="font-weight-bolder">{designation}</p>
                    </div>
                </div>
                
                    <p className="card-text text-secondary p-2">{description}</p>
                
            </div>


        </div>
    );
};

export default ClientDetail;