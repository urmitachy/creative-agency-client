import React, { useEffect, useState } from 'react';
// import phone from '../../../imge/images/icons/iphone 1.png';
// import graphic from '../../../imge/images/icons/graphic.png';
// import coding from '../../../imge/images/icons/coding 1.png';
import SubjectDetail from '../SubjectDetail/SubjectDetail';



// const blogData = [
//     {
//         title : 'Web & Mobile design',
//         description : 'We craft stunning and amazing web Ul, usinga well drafted ux to fit your product.',
//         authorImg : "https://i.ibb.co/gvc8k63/iphone-1.png",
       
//     },
//     {
//         title : 'Graphic design',
//         description : 'Amazing flyers, social media posts and brand represantations that would make your brand stand out.',
//         authorImg : "https://i.ibb.co/PC5XqKk/graphic.png",
       
//     },
//     {
//         title : 'Web development',
//         description: 'With well written codes, we build amazing apps for all plattforms, mobile and web apps in general.',
//         authorImg : "https://i.ibb.co/q0v3dQT/coding-1.png",
       
//     },
// ]

const Subject = () => {

    // const handleaddData = () => {
    //     fetch('http://localhost:5000/addServices', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(blogData)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    // }


    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            
    }, []);
    console.log(services)

    return (
        <section className="blogs my-5">
        <div className="container">
            <div className="section-header text-center mb-10">
                
                 <h1 style = {{marginTop: "10%"}}>Provide awesome <span style = {{color :"#7AB259"}}>services</span></h1>
                 {/* <button onClick={handleaddData}>Add data</button> */}
            </div>
            <div className="card-deck">
                 {
                     services.map(service => <SubjectDetail service={service} key={service._id}/>)
                 }
            </div>
        </div>
    </section>
    );
};

export default Subject;