import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import {Link} from "react-router-dom";






const Kitchen = () => {

    return (
    <>
     <div>
        <Navbar firstName="GB-Home-" lastName="Services" />
         {/* ***************************  kitchen services home *************************** */}
         <div className='container py-md-5 py-2'>
        <div className="row">
            <div className="col-md-8 mt-md-5 mt-1">
                <h1 className='hero-heading gradient-heading main-heading'>Kitchen Designing Services</h1>
                <p className='HeroPragraph mt-4 px-md-3 main-paragraph'>
                No need to worry about your kitchen design troubles anymore! Our skilled in-house designers from Gb-home-services are here to ensure your kitchen is in top-notch condition. Count on us for the most reliable and comprehensive range of kitchen designing and remodeling services available.
                </p>
                <form className="d-flex me-4 mt-md-5">
                    <input className="form-outline form-control me-2 p-2 mb-md-0 mb-3 border" type="search" placeholder="Search services" aria-label="Search"/>
                    <button className="nav-btn btn mb-md-0 mb-3" type="submit">Search</button>
                </form>
            </div>
            <div className="col-md-4 mt-md-0 mt-3">
                <div className="container bg-black text-white px-4 rounded-3 pt-4 pb-4">
                    <div className="col-12">
                        <h3 className='text-center fw-bold mb-4'>Book Your Service</h3>
                        <input className="form-control me-2 p-2 mb-md-0 mb-3 border mt-3" type="search" placeholder="Name" aria-label="Search"/>
                        <input className=" form-control me-2 p-2 mb-md-0 mb-3 border mt-3" type="search" placeholder="03xxxxxxxxxxx" aria-label="Search"/>
                        <input className=" form-control me-2 p-2 mb-md-0 mb-3 border mt-3" type="search" placeholder="Select Service" aria-label="Search"/>
                        <input className=" form-control me-2 p-2 mb-md-0 mb-3 border mt-3" type="search" placeholder="City" aria-label="Search"/>
                        <input className=" form-control me-2 p-2 mb-md-0 mb-3 border mt-3 mb-3" type="search" placeholder="Area" aria-label="Search"/>
                        <input className=" form-control me-2 p-2 mb-md-0 mb-3 border mt-3 mb-3" type="search" placeholder="Adress" aria-label="Search"/>
                        <button className='btn form-btn w-100'>Request to call</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
         {/* ***************************  kitchen services home  end*************************** */}

        {/* select your desired service section */}
        <div className="container-fluid mt-md-4 px-md-4 mb-md-5 HomeSection-bg py-5">
        <h1 className="fw-bold text-center mb-md-4 main-heading">Selecte Your Desire Service</h1>
        <h5 className="text-center mb-4 main-paragraph">GB-home-services provides ultimate installations, repairs, maintenance, and grooming services at your doorstep.</h5>
    <div className="row">
    <div className="col-lg-3 col-md-6 mb-3">
        <Link className="text-decoration-none" to="/log">
        <div className="s-card card text-center h-100 pt-5 pb-2 shadow-lg service-card-bg1" onclick="window.location='#'">
            <div className="card-body">
            <i class="fa-solid fa-house-laptop mb-3"></i> 
            <h5 className="card-title fw-bold mb-md-5 text-white ">Custom Kitchen Layouts</h5>
            <button className="btn card-btn w-100">BOOK NOW</button>
            </div>
        </div>
        </Link>
        </div>
        <div className="col-lg-3 col-md-6 mb-3">
        <Link className="text-decoration-none" to="/log">
        <div className="s-card card text-center h-100 pt-5 pb-2 shadow-lg  service-card-bg2" onclick="window.location='#'">
            <div className="card-body">
            <i class="fa-solid fa-house-laptop mb-3"></i> 
            <h5 className="card-title fw-bold mb-md-5 text-white">Cabinet Installation and Refacing</h5>
            <button className="btn card-btn w-100">BOOK NOW</button>
            </div>
        </div>
        </Link>
        </div>
        <div className="col-lg-3 col-md-6 mb-3">
        <Link className="text-decoration-none" to="/log">
        <div className="s-card card text-center h-100 pt-5 pb-2 shadow-lg" onclick="window.location='#'">
            <div className="card-body">
            <i class="fa-solid fa-house-laptop mb-3"></i> 
            <h5 className="card-title fw-bold mb-md-5 ">Lighting Design</h5>
            <button className="btn card-btn w-100">BOOK NOW</button>
            </div>
        </div>
        </Link>
        </div>
        <div className="col-lg-3 col-md-6 mb-3">
        <Link className="text-decoration-none" to="/log">
        <div className="s-card card text-center h-100 pt-5 pb-2 shadow-lg" onclick="window.location='#'">
            <div className="card-body">
            <i class="fa-solid fa-house-laptop mb-3"></i> 
            <h5 className="card-title fw-bold mb-md-5 ">Flooring Solutions</h5>
            <button className="btn card-btn w-100">BOOK NOW</button>
            </div>
        </div>
        </Link>
        </div>
    
 </div>
{/* ################################# */}
<div className="row">
    <div className="col-lg-3 col-md-6 mb-3">
        <Link className="text-decoration-none" to="/log">
        <div className="s-card card text-center h-100 pt-5 pb-2 shadow-lg service-card-bg1" onclick="window.location='#'">
            <div className="card-body">
            <i class="fa-solid fa-house-laptop mb-3"></i> 
            <h5 className="card-title fw-bold mb-md-5 text-white ">Appliance Integration</h5>
            <button className="btn card-btn w-100">BOOK NOW</button>
            </div>
        </div>
        </Link>
        </div>
        <div className="col-lg-3 col-md-6 mb-3">
        <Link className="text-decoration-none" to="/log">
        <div className="s-card card text-center h-100 pt-5 pb-2 shadow-lg  service-card-bg2" onclick="window.location='#'">
            <div className="card-body">
            <i class="fa-solid fa-house-laptop mb-3"></i> 
            <h5 className="card-title fw-bold mb-md-5 text-white">Storage Solutions</h5>
            <button className="btn card-btn w-100">BOOK NOW</button>
            </div>
        </div>
        </Link>
        </div>
        <div className="col-lg-3 col-md-6 mb-3">
        <Link className="text-decoration-none" to="/log">
        <div className="s-card card text-center h-100 pt-5 pb-2 shadow-lg" onclick="window.location='#'">
            <div className="card-body">
            <i class="fa-solid fa-house-laptop mb-3"></i> 
            <h5 className="card-title fw-bold mb-md-5 ">Backsplash Design and Installation</h5>
            <button className="btn card-btn w-100">BOOK NOW</button>
            </div>
        </div>
        </Link>
        </div>
        <div className="col-lg-3 col-md-6 mb-3">
        <Link className="text-decoration-none" to="/log">
        <div className="s-card card text-center h-100 pt-5 pb-2 shadow-lg" onclick="window.location='#'">
            <div className="card-body">
            <i class="fa-solid fa-house-laptop mb-3"></i> 
            <h5 className="card-title fw-bold mb-md-5 ">ountertop Selection and Installation</h5>
            <button className="btn card-btn w-100">BOOK NOW</button>
            </div>
        </div>
        </Link>
        </div>
    
 </div>

{/* ################################# */}

 
</div>
 {/* select your desired service section */}
 {/* latest customer review section */}
 <div className="container mb-md-5">
    <div className="row">
    <h4 className='text-center fw-bold'>Latest Custumers Review</h4>
    <p className='text-center'>Here’s what some of our customers say about us.</p>
    <div className="col-lg-3 col-md-6 mb-3">
   <div className="card h-100 shadow-lg" onclick="window.location='#'">
        <div className="card-body">
           <h5 className="card-title">Malik Abul Hassan</h5>
           <p className=''>GILGit</p>
           <p className='mt-4'>I am very satisfied with KamKaj they came to me timely and did my work professionally</p>
        </div>
      </div>
   </div>

   <div className="col-lg-3 col-md-6 mb-3">
   <div className="card h-100 shadow-lg" onclick="window.location='#'">
        <div className="card-body">
           <h5 className="card-title">Atif shahzad</h5>
           <p className=''>Amphary</p>
           <p className='mt-4'>I am very satisfied with KamKaj they came to me timely and did my work professionally</p>
        </div>
      </div>
   </div>
 
   
   <div className="col-lg-3 col-md-6 mb-3">
   <div className="card h-100 shadow-lg" onclick="window.location='#'">
        <div className="card-body">
           <h5 className="card-title">Aftab Hussain</h5>
           <p className=''>jutiyal</p>
           <p className='mt-4'>I am very satisfied with KamKaj they came to me timely and did my work professionally</p>
        </div>
    </div>
   </div>
   <div className="col-lg-3 col-md-6 mb-3">
   <div className="card h-100 shadow-lg" onclick="window.location='#'">
        <div className="card-body">
           <h5 className="card-title ">Sunail ayub</h5>
           <p className=''>konudas</p>
           <p className='mt-4'>I am very satisfied with KamKaj they came to me timely and did my work professionally</p>
        </div>
    </div>

   </div>
   </div>
   


    
   </div>


 

   
    </div>

 
 {/* latest customer review section */}
        <Footer/>


    </>
    );
}



export default Kitchen;