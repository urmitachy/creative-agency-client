import React from 'react';
import logos from '../../../imge/images/logos/Frame.png'

const HeaderMain = () => {
    return (
       <main className = "row align-items-center">
           <div className="col-md-4 offset-md-1">
            <h1>Let's Grow Your Brand To The Next Level</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error aliquam explicabo autem nobis doloremque veritatis.</p>
            <button style = {{width : "100px"}} type="button" class="btn btn-dark">Hire Us</button> 
           </div>
           <div className="col-md-7">
               <img src={logos} style = {{width : "80%"}} alt="" className="img-fluid"/>
           </div>
       </main>
    );
};

export default HeaderMain;