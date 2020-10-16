import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import phone from '../../../imge/images/icons/iphone 1.png';
// import graphic from '../../../imge/images/icons/graphic.png';
// import coding from '../../../imge/images/icons/coding 1.png';
import SubjectDetail from '../SubjectDetail/SubjectDetail';



const Subject = () => {
const location = useLocation();

    useEffect(()=> {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({behavior: "smooth"})
            }
        } else {
        window.scrollTo({top:0,left:0, behavior: "smooth"})
        }
}, [location,])


    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://stormy-anchorage-31653.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
            
    }, []);
    console.log(services)

    return (
        <section id = "services" className="blogs my-5">
        <div className="container">
            <div className="section-header text-center mb-10">                
                 <h1 style = {{marginTop: "10%"}}>Provide awesome <span style = {{color :"#7AB259"}}>services</span></h1>                 
            </div>
            <div className="row">
                 {
                     services.map(service => <SubjectDetail service={service} key={service._id}/>)
                 }
            </div>
        </div>
    </section>
    );
};

export default Subject;