import React from 'react';
import {Link} from "react-router-dom"







const Footer = () => {
    return <div>
        <div className="container-fluid footer-img px-md-5 md-px-3 px-2 py-3 py-md-5">
          
            <div className="row">
                <div className="col-md-3 text-white">
                    <h2 className='fw-bold primary-color mb-4 ubuntu-regular herosection-title'>GB-HOME-SERVICES</h2>
                    <h6 className='ubuntu-regular herosection-paragraph'>
                    When it comes to GB-HOME-SERVICES, the object of the word 'GB' reflects our motive to add value to our customers' lives by providing all the essential services in their day-to-day lives. On the other hand, the word 'HOME-SERVICES' highlights our motive to reduce unemployment in Pakistan by hiring in-house staff whom we train in any given skills.
                    </h6>
                    <div className='w-100 d-flex flex-row '>
                        <div className="col-3 py-4">
                            <h6>Follow Us</h6>
                        </div>
                        <div className="col-2">
                          <Link><i class="fa-brands fa-square-youtube Social-icons mb-md-0 mb-3"></i></Link>
                        </div>
                        <div className="col-2">
                          <Link><i class="fa-brands fa-twitter Social-icons"></i></Link>
                        </div>
                        <div className="col-2">
                            <Link><i class="fa-brands fa-square-facebook Social-icons"></i></Link>
                        </div>
                        <div className="col-2">
                            <Link to=" https://wa.me/923410727692"><i class="fa-brands fa-square-whatsapp Social-icons"></i></Link>
                        </div>
                        

                    </div>
                  
                </div>
                <div className="col-md-3 text-white ">
                   <h2 className='fw-bold'>Company</h2>
                   <Link className="nav-link active fw-bold" to="/blog">Blog</Link>
                   <Link className="nav-link active fw-bold" to="/about">About Us</Link>
                   <Link className="nav-link active fw-bold" to="/Career">Careers</Link>
                </div>
                <div className="col-md-3 text-white">
                  <h2 className='fw-bold'>Customers</h2> 
                  <Link className="nav-link active fw-bold" to="/blog">How it work</Link>
                   <Link className="nav-link active fw-bold" to="/about">I phone app</Link>
                   <Link className="nav-link active fw-bold" to="/Career">Andriod app</Link>
                </div>
                <div className="col-md-3 text-white">
                  <h2 className='fw-bold '>Support</h2>
                  <Link className="nav-link active fw-bold" to="/blog">Contact Us</Link>
                   <Link className="nav-link active fw-bold" to="/about">0341-0727692</Link>
                   <Link className="nav-link active fw-bold" to="/Career">GB_home_services@gmail.com</Link>
                </div>
            </div>
            </div>
            
            

    </div>;
}


// #endregion

export default Footer;