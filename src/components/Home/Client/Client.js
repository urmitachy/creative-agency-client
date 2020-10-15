import React, { useEffect, useState } from 'react';
import ClientDetail from '../ClientDetail/ClientDetail';

const Client = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, []);
    console.log(reviews)
    return (
        <section className="blogs my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h1 style={{ marginTop: "10%", marginBottom: "5%" }}>Clients <span style={{ color: "#7AB259" }}>feedback</span></h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        reviews.map(reviews => <ClientDetail reviews={reviews} key={reviews._id} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Client;