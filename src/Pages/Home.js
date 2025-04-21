import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Footer from "../Components/Footer";
import HomeSecondSection from "../Components/HomeSecondSection";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

const Home =()=>{
    return(
        <>
        <Navbar firstName="GB-Home-" lastName="Services"/>
        <HeroSection/>
        <div className="container-fluid mt-5 px-md-4">
 <h1 className="text-center mb-3 fw-bold ubuntu-bold herosection-title">Our Top Services</h1>
  <h5 className="text-center mb-4 herosection-paragraph">GB-home-services provides ultimate installations, repairs, maintenance, and grooming services at your doorstep.</h5>
  <div className="row">
    <div className="col-lg-3 col-6 col-md-6 mb-3">
    <Link className="text-decoration-none" to="/kitchen">
    <div className="s-card card text-center md-h-100 py-5  shadow-lg" onclick="window.location='#'">
        <div className="card-body">
          <img src="./Fypimgs/ktchenicon.png" alt="" className="img-size  mb-3"/>
          <h5 className="card-title ubuntu-bold">Kitchen Designing </h5>
        </div>
      </div>
    </Link>
    </div>
    <div className="col-lg-3 col-6  col-md-6 mb-3">
    <Link className="text-decoration-none" to="/paint">
    <div className="s-card card text-center md-h-100  py-5 shadow-lg" onclick="window.location='#'">
        <div className="card-body">
         <img src="./Fypimgs/housepainticon.png" alt="" className="img-size mb-3" />
          <h5 className="card-title ubuntu-bold">House Paint Services</h5>
        </div>
      </div>
    </Link>
    </div>
    <div className="col-lg-3 col-6  col-md-6 mb-3">
    <Link className="text-decoration-none" to="/electrical">
    <div className="s-card card text-center md-h-100  py-5 shadow-lg" onclick="window.location='#'">
        <div className="card-body">
          <img src="./Fypimgs/electric.png" alt="img" className="mb-3 img-size"/>
          <h5 className="card-title ubuntu-bold">Electrical Services</h5>
        </div>
      </div>
    </Link>
    </div>
    <div className="col-lg-3 col-6 col-md-6 mb-3">
    <Link className="text-decoration-none" to="/plumbing">
    <div className="s-card card text-center md-h-100 py-5 shadow-lg" onclick="window.location='#'">
        <div className="card-body">
          <img src="./Fypimgs/plumbingicon.png" alt="" className="img-size mb-3" />
          <h5 className="card-title ubuntu-bold">Plumbing Services</h5>
        </div>
      </div>
    </Link>
    </div>
  </div>
</div>

<div className="container-fluid recommended-services">
<div className="container  mt-md-4 py-5 px-md-4 mb-md-5">
  <h1 className="fw-bold text-center mb-md-4 ubuntu-bold herosection-title text-white">Recomended Services For You</h1>
  <div className="row  mb-md-4">
  <div className="col-lg-3 col-md-6 mb-3">
    <Link className="text-decoration-none" to="/acinstallation">
    <div className="s-card card text-center text-white h-100 pt-5 pb-2 shadow-lg service-card-bg1 btl-corner" onclick="window.location='#'">
        <div className="card-body">
         {/* <i class="fa-solid fa-house-laptop mb-3 p-icon"></i>  */}
          <h5 className="card-title fw-bold mb-md-5 text-white bg-shade ubuntu-regular">AC REPAIR</h5>
          
          <button className="btn card-btn w-100 ubuntu-bold">BOOK NOW</button>
        </div>
      </div>
    </Link>
    </div>
    {/* <ServiceCards imglink="./Pages/serviceimgs/ac.jpg" cardTitle="tehseen ki gand" paragraph="sub mar lo tehseen ki gand aty jawo"/> */}
    <div className="col-lg-3 col-md-6 mb-3">
    <Link className="text-decoration-none" to="/sofacleaning">
    <div className="s-card card text-center text-white h-100 pt-5 pb-2 shadow-lg  service-card-bg2" onclick="window.location='#'">
        <div className="card-body">
           {/* <i class="fa-solid fa-house-laptop mb-3 p-icon"></i>  */}
          <h5 className="card-title fw-bold mb-md-5 text-white bg-shade ubuntu-regular">SOFA CLEANING</h5>
          <button className="btn card-btn w-100">BOOK NOW</button>
        </div>
      </div>
    </Link>
    </div>
    <div className="col-lg-3 col-md-6 mb-3">
    <Link className="text-decoration-none" to="/deepcleaning">
    <div className="s-card card text-center text-white h-100 pt-5 pb-2 shadow-lg service-card-bg3" onclick="window.location='#'">
        <div className="card-body">
           {/* <i class="fa-solid fa-house-laptop mb-3 p-icon"></i>  */}
          <h5 className="card-title fw-bold mb-md-5 bg-shade ubuntu-regular">DEEP CLEANING</h5>
          <button className="btn card-btn w-100">BOOK NOW</button>
        </div>
      </div>
    </Link>
    </div>
    <div className="col-lg-3 col-md-6 mb-3">
    <Link className="text-decoration-none" to="/carpetcleaning">
    <div className="s-card card text-center text-white h-100 pt-5 pb-2 shadow-lg service-card-bg4 btr-coner" onclick="window.location='#'">
        <div className="card-body">
           {/* <i class="fa-solid fa-house-laptop mb-3 p-icon"></i>  */}
          <h5 className="card-title fw-bold mb-md-5 bg-shade ubuntu-regular">CARPET CLEANING</h5>
          <button className="btn card-btn w-100">BOOK NOW</button>
        </div>
      </div>
    </Link>
    </div>
    
 </div>
 {/*########## SECOUND ROW START ########## */}
  <div className="row mb-md-4">
  <div className="col-lg-3 col-md-6 mb-3">
    <Link className="text-decoration-none" to="/washingmachine">
    <div className="s-card card text-center text-white h-100 pt-5 pb-2 shadow-lg service-card-bg5" onclick="window.location='#'">
        <div className="card-body">
           {/* <i class="fa-solid fa-house-laptop mb-3 p-icon"></i>  */}
          <h6 className="card-title fw-bold mb-md-5 bg-shade ubuntu-regular">WASHING MACHINE REPARING</h6>
          <button className="btn card-btn w-100">BOOK NOW</button>
        </div>
      </div>
    </Link>
    </div>
    <div className="col-lg-3 col-md-6 mb-3">
    <Link className="text-decoration-none" to="/microwave">
    <div className="s-card card text-center text-white h-100 pt-5 pb-2 shadow-lg service-card-bg6" onclick="window.location='#'">
        <div className="card-body">
           {/* <i class="fa-solid fa-house-laptop mb-3 p-icon"></i>  */}
          <h5 className="card-title fw-bold mb-md-5 bg-shade ubuntu-regular">MICRO WAVE REPAIR</h5>
          <button className="btn card-btn w-100">BOOK NOW</button>
        </div>
      </div>
    </Link>
    </div>
    <div className="col-lg-3 col-md-6 mb-3">
    <Link className="text-decoration-none" to="/pestcontrol">
    <div className="s-card card text-center text-white h-100 pt-5 pb-2 shadow-lg service-card-bg7" onclick="window.location='#'">
        <div className="card-body">
           {/* <i class="fa-solid fa-house-laptop mb-3 p-icon"></i>  */}
          <h5 className="card-title fw-bold mb-md-5 bg-shade ubuntu-regulars">PEST CONTROL SERVICES</h5>
          <button className="btn card-btn w-100">BOOK NOW</button>
        </div>
      </div>
    </Link>
    </div>
    <div className="col-lg-3 col-md-6 mb-3">
    <Link className="text-decoration-none" to="/refrigirator">
    <div className="s-card card text-center text-white h-100 pt-5 pb-2 shadow-lg service-card-bg8" onclick="window.location='#'">
        <div className="card-body">
           {/* <i class="fa-solid fa-house-laptop mb-3 p-icon"></i>  */}
          <h5 className="card-title fw-bold mb-md-5 bg-shade ubuntu-regulars">REFRIGIRATOR REPAIR</h5>
          <button className="btn card-btn w-100">BOOK NOW</button>
        </div>
      </div>
    </Link>
    </div>

  </div>

   {/*########## SECOUND ROW START ########## */}
  <div className="row">
  <div className="col-lg-3 col-md-6 mb-3">
    <Link className="text-decoration-none" to="/electrition">
    <div className="s-card card text-center text-white h-100 pt-5 pb-2 shadow-lg service-card-bg9 blc-corner" onclick="window.location='#'">
        <div className="card-body">
           {/* <i class="fa-solid fa-house-laptop mb-3 p-icon"></i>  */}
          <h5 className="card-title fw-bold mb-md-5 bg-shade ubuntu-regular">ELECTRITION SERVICES</h5>
          <button className="btn card-btn w-100">BOOK NOW</button>
        </div>
      </div>
    </Link>
    </div>
    <div className="col-lg-3 col-md-6 mb-3">
    <Link className="text-decoration-none" to="/curton">
    <div className="s-card card text-center text-white h-100 pt-5 pb-2 shadow-lg service-card-bg10" onclick="window.location='#'">
        <div className="card-body">
           {/* <i class="fa-solid fa-house-laptop mb-3 p-icon"></i>  */}
          <h5 className="card-title fw-bold mb-md-5 bg-shade ubuntu-regular">CURTON CLEANING</h5>
          <button className="btn card-btn w-100">BOOK NOW</button>
        </div>
      </div>
    </Link>
    </div>
    <div className="col-lg-3 col-md-6 mb-3">
    <Link className="text-decoration-none" to="/watertank">
    <div className="s-card card text-center text-white h-100 pt-5 pb-2 shadow-lg service-card-bg11" onclick="window.location='#'">
        <div className="card-body">
           {/* <i class="fa-solid fa-house-laptop mb-3 p-icon"></i>  */}
          <h5 className="card-title fw-bold mb-md-5 bg-shade ubuntu-regular">WATER TANK CLEANING</h5>
          <button className="btn card-btn w-100">BOOK NOW</button>
        </div>
      </div>
    </Link>
    </div>
    <div className="col-lg-3 col-md-6 mb-3">
    <Link className="text-decoration-none " to="/waterdespenser">
    <div className="s-card card text-center text-white h-100 pt-5 pb-2 shadow-lg service-card-bg12 brc-corner" onclick="window.location='#'">
        <div className="card-body">
           {/* <i class="fa-solid fa-house-laptop mb-3 p-icon"></i>  */}
          <h5 className="card-title fw-bold mb-md-5 bg-shade ubuntu-regular">WATER DISPENSER REPAIR</h5>
          <button className="btn card-btn w-100">BOOK NOW</button>
        </div>
      </div>
    </Link>
    </div>
  </div>
</div>
</div>

 
        
        
        
        <HomeSecondSection/>
        <Footer/>
        </>

    );
}
Home.propsType={
  firstName: PropTypes.string,
}
export default Home;