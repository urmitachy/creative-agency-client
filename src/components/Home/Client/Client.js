import React, { useEffect, useState } from 'react';
import ClientDetail from '../ClientDetail/ClientDetail';
// import a from '../../../imge/images/Ellipse 90.png';
// import b from '../../../imge/images/Ellipse 91.png';
// import c from '../../../imge/images/Ellipse 92.png'


const blogData = [
    {
        designation : 'CEO ,Manpal',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Nash Patrik',
        authorImg : "https://i.ibb.co/RSQrzZm/Ellipse-90.png",
       
    },
    {
        designation : 'CEO ,Manpal',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Miriam Barron',
        authorImg :"https://i.ibb.co/kmmzbrN/Ellipse-91.png",
       
    },
    {
        designation : 'CEO ,Manpal',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Bria Malone',
        authorImg : "https://i.ibb.co/LYrqmnx/Ellipse-92.png",
        
    },
]





const Client = () => {
    // const handleaddReview = () => {
    //         fetch('http://localhost:5000/addReviews', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(blogData)
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data)
    //             })
    //     }


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
                
            <h1 style = {{marginTop: "10%",marginBottom:"5%"}}>Clients <span style = {{color :"#7AB259"}}>feedback</span></h1>
            {/* <button onClick={handleaddReview}>Add reviews</button> */}
            </div>
            <div className="card-deck mt-5">
                 {
                     reviews.map(reviews => <ClientDetail reviews={reviews} key={reviews._id}/>)
                 }
            </div>
        </div>
    </section>
    );
};

export default Client;