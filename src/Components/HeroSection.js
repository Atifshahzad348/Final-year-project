import React from 'react';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */

const HeroSection = () => {
   

    return <div className='container py-md-5 py-2'>
        <div className="row">
            <div className="col-md-8 mt-md-5 mt-1">
                <h1 className='hero-heading ubuntu-bold herosection-title'> <span className='primary-color ubuntu-bold'>Skilled Professional</span> <span className='ubuntu-bold'>At Your</span>  <br/> Doorstep.</h1>
                <p className='HeroPragraph mt-4 px-md-3 ubuntu-regular herosection-paragraph'>
                   Gb-home-service providers is a leading multiple service provider company catering to your 360 needs with quality guaranteed.

                    The aim and priority of Gb-home-service providers are to add value to our consumers' lives by providing smart solutions to all their problems. Our pride is providing the most extensive range of services. From home maintenance to personal assistance, we make sure that your safety is never compromised. This is why we hire all the staff under the roof of Gb-home-service providers, just for your satisfaction.
                </p>
                <form className="d-flex me-4 mt-md-5">
                    <input className="form-outline form-control me-2 px-2 py-0 mb-md-0 mb-3 border" type="search" placeholder="Search services" aria-label="Search"/>
                    <button className="nav-btn btn mb-md-0 mb-2 mt-2  " type="submit">Search</button>
                </form>
            </div>
            <div className="col-md-4 mt-md-0 mt-3">
                <div className="container bg-black text-white px-4 rounded-3 pt-4 pb-4">
                    <div className="col-12">
                        <h3 className='text-center fw-bold mb-4 herosection-title'>Book Your Service</h3>
                        <input className="form-control me-2 p-2 mb-md-0 mb-3 border mt-3" type="search" placeholder="Name" aria-label="Search"/>
                        <input className=" form-control me-2 p-2 mb-md-0 mb-3 border mt-3" type="search" placeholder="03xxxxxxxxxxx" aria-label="Search"/>
                        <input className=" form-control me-2 p-2 mb-md-0 mb-3 border mt-3" type="search" placeholder="Select Service" aria-label="Search"/>
                        <input className=" form-control me-2 p-2 mb-md-0 mb-3 border mt-3" type="search"  placeholder="City" aria-label="Search"/>
                        <input className=" form-control me-2 p-2 mb-md-0 mb-3 border mt-3 mb-3" type="search" placeholder="Area" aria-label="Search"/>
                        <input className=" form-control me-2 p-2 mb-md-0 mb-3 border mt-3 mb-3" type="search" placeholder="Adress" aria-label="Search"/>
                        <button className='btn form-btn w-100'>Request to call</button>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

HeroSection.propTypes = propTypes;
HeroSection.defaultProps = defaultProps;
// #endregion

export default HeroSection;