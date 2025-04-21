import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Contact =()=>{
    return(
        <>
        <Navbar firstName="GB-Home-" lastName="Services"/>
        <div className="container-fluid  px-2 px-md-5 md-py-5 py-3 mb-md-5">
           <div className="row">
             <div className="col-12">
                <h2 className="fw-bold mb-md-4 display-5 contact-title">Contact Us</h2>
                <h5 className="contact-pargraph">Get in touch with GB-Home-Services. Talk to our team for 24/7 customer support.</h5>
             </div>
           </div>
        </div>
        <div className="container-fluid md-px-5 px-3 md-py-5 py-3 mb-md-5">
            <h5 className="contact-pargraph">Let us know how we can help. We will get in touch as soon as possible based on urgency of your request.</h5>
            <div className="row">
                <div className="col-md-6">
                    <div className="">
                        <label htmlFor="" className="fw-bold mt-3">First Name</label>
                        <input type="text"  className="input-height my-3 form-outline w-100 form-control me-2 p-2 mb-md-0 mb-3 border mt-3"/>
                    </div>
                    <div>
                        <label htmlFor="" className="fw-bold mt-3">E-mail</label>
                        <input type="text"  className="input-height  form-outline w-100 form-control me-2 p-2 mb-md-0 mb-3 border mt-3"/>
                    </div>
                    
                </div>
                <div className="col-md-6">
                <div className="">
                        <label htmlFor="" className="fw-bold mt-3">Last Name</label>
                        <input type="text"  className="input-height my-3 form-outline w-100 form-control me-2 p-2 mb-md-0 mb-3 border mt-3"/>
                    </div>
                    <div>
                        <label htmlFor="" className="fw-bold mt-3">Phone No</label>
                        <input type="text"  className="input-height  form-outline w-100 form-control me-2 p-2 mb-md-0 mb-3 border mt-3"/>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-12">
                  <label htmlFor="" className="fw-bold mt-3">Your Message</label>
                  <textarea type="text"  className="msg-feild form-outline w-100 form-control me-2 p-2 mb-md-0 mb-3 border mt-3"/>
                  <label htmlFor="" className="fw-bold mt-2">250 characters remaining</label>
                </div>
            </div>
            <button className="btn nav-btn my-3">submit</button>
        </div>
        <Footer/>
        </>

    );
}

export default Contact;