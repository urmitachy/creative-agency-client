import React, { useEffect, useState } from 'react';
import ClientDetail from '../ClientDetail/ClientDetail';

const Client = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://stormy-anchorage-31653.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, []);
    console.log(reviews)
    return (
        
            <div className="container">
                <div className="section-header text-center">
                    <h1 style={{ marginTop: "10%", marginBottom: "5%" }}>Clients <span style={{ color: "#7AB259" }}>feedback</span></h1>
                </div>
                <div className="row">
                    {
                        reviews.map(reviews => <ClientDetail reviews={reviews} key={reviews._id} />)
                    }
                </div>
            </div>
        
    );
};

export default Client;