import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
            

       <section className="footer">
            <div className="row container">
            <div className="col-md-6">
                <h1>Let us handle your</h1>
               <h1> project, professionally.</h1>
                <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general</p>
            </div>
            <div className="col-md-6 ">
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Email Address "/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your name/Company's name"/>
                    </div>
                    <div className="form-group">
                        <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your massage"></textarea>
                    </div>
                    <div className="form-group">
                    <button style = {{width : "100px"}} type="button" class="btn btn-dark">Send</button>
                    </div>
                </form>
            </div>
        </div>
        <br/><br/>
        <footer className=" text-center">
           copyright orange labs 2020
        </footer>
       </section>

    );
};

export default Footer;