import Navbar from "../Components/Navbar";
import {Link} from "react-router-dom"
import React from 'react';

// import Footer from "../Components/Footer";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component


/**
 * 
 */
const SignUp = () => {
    return <div>
        <Navbar firstName="GB-Home-" lastName="Services" />
        <div className="container mt-md-5 md-p-5">
            <div className="row shadow-lg p-0 rounded">
                <div className="col-md-6 p-0 login-right d-flex  justify-content-center ">
                    <img src="../Fypimgs/signup2.png" alt="" className='img-fluid' />

                </div>
                <div className="col-md-6 p-md-5 pt-md-4 pt-4 pb-4 md-pb-5  login-left d-flex flex-column justify-content-center">
                    <img src="../Fypimgs/logo.png" alt="" className='m-auto' width={200}/>
                    {/* <h1 className='login-heading text-center fw-bold'>GB-HOME-SERVICES</h1> */}
                    <h2 className='mt-md-4 mb-3 text-center fw-bold'>Sign Up</h2>
                    <form>
                    <div className="mb-3">
                            <label for="text" className="form-label">Full Name</label>
                            <input type="text" className="form-control w-100 input-height" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                           
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control w-100 input-height" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                           
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-labe">Password</label>
                            <input type="password" className="form-control w-100 input-height" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-labe">Confirm Password</label>
                            <input type="password" className="form-control w-100 input-height" id="exampleInputPassword1"/>
                        </div>
                        
                        <button type="submit" className="nav-btn btn w-100 fw-bold mt-md-2">Sign Up</button>
                        <label className="form-check-label m-auto text-center w-100 fw-bold my-2" for="exampleCheck1">Already have an account</label>
                        <Link className="nav-link active fw-bold" to="/login">
                        <button type="submit" className="nav-btn btn w-100 me-auto fw-bold">Log In</button>
                        </Link>
                        {/* <button type="submit" className="nav-btn btn w-100 me-auto fw-bold">Log In</button> */}
                        </form>
                </div>
              
            </div>
        </div>
        {/* <Footer/> */}
    </div>;
}



export default SignUp;