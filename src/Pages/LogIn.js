
import React from 'react';
import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';


/**
 * 
 */
const LogIn = (props) => {
    return <div>
        <Navbar firstName="GB-Home-" lastName="Services" />
         <div className="container mt-md-5 p-md-5 px-4 py-4">
            <div className="row shadow-lg p-0 rounded">
                <div className="col-md-6 p-md-5 pt-md-4 pt-3 pb-5 login-left d-flex flex-column justify-content-center order-md-1 order-2 ">
                    <img src="../Fypimgs/logo.png" alt="" className='m-auto ' width={200}/>
                    {/* <h1 className='login-heading text-center fw-bold'>GB-HOME-SERVICES</h1> */}
                    <h2 className='mt-md-4 mb-3 text-center fw-bold'>LOG IN</h2>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control w-100 input-height" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-labe">Password</label>
                            <input type="password" className="form-control w-100 input-height" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3 form-check">
                            <label className="form-check-label me-4 ms-md-auto" for="exampleCheck1">I don't have an accounnt :</label>
                            <a href="/" className='text-decoration-none'>Sign Up</a>
                        </div>
                        <button type="submit" className="nav-btn btn w-100 fw-bold">Log in</button>
                        </form>
                </div>
                <div className="col-md-6 order-md-2 order-1 p-0 login-right hide-img">
                    <img src="../Fypimgs/login.png" alt="" className='img-fluid' />

                </div>
            </div>
        </div>
        {/* <Footer/> */}
    </div>;
}



export default LogIn;