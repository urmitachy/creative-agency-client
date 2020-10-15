import React from 'react';



const ClientDetail = (props) => {
    const {description, author, authorImg , designation} = props.reviews;
    console.log(author)
    return (
        <div className="card shadow-sm">
            <div className="d-flex  align-items-center pt-4">
                <img className="mx-3" src={`data:image/png;base64,${authorImg.img}`} alt="" width="60"/>
                <div>
                    <h4 className="font-weight-bolder">{author}</h4>
                    <p className="font-weight-bolder">{designation}</p>
                </div>
            </div>
            <div className="card-body">
            <p className="card-text text-secondary mt-1">{description}</p>
            </div>
            
       </div>
    );
};

export default ClientDetail;