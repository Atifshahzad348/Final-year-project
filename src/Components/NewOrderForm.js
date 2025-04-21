import React from 'react'

export default function NewOrderForm() {
  return (
    <div className='bg-black py-3 px-3'>
        <form action="">
            <h2 className='text-center text-white order_form_heading'>Book You Service</h2>
            <h6 className='text-white'>You will recive a call in few minutes to guide you regarding your query.</h6>
            <input className="form-control me-2 p-2 mb-md-0 mb-3 border mt-3" type="search" placeholder="Name" aria-label="Search"/>
            <input className="form-control me-2 p-2 mb-md-0 mb-3 border mt-3" type="search" placeholder="03xxxxxxxx" aria-label="Search"/>
            <input className="form-control me-2 p-2 mb-md-0 mb-3 border mt-3" type="search" placeholder="City" aria-label="Search"/>
            <input className="form-control me-2 p-2 mb-md-0 mb-3 border mt-3" type="search" placeholder="Address" aria-label="Search"/>
         {/* <div className="input-group"> */}
            <input className="form-control me-2 p-2 mb-md-0 mb-3 border mt-3"type="search"placeholder="Services" aria-label="Search" list="services-list"/>
              <datalist id="services-list">
                <option value="AC installation" />
                <option value="Sofa cleaning" />
                <option value="Pest control" />
                <option value="Washing machine repairing" />
                <option value="Curtain cleaning" />
                <option value="Curtain cleaning" />
                <option value="Curtain cleaning" />
                <option value="Curtain cleaning" />
                <option value="Curtain cleaning" />
                <option value="Curtain cleaning" />
                <option value="Curtain cleaning" />
              </datalist>
          {/* </div> */}
          {/* <div className="input-group"> */}
            <input className="form-control me-2 p-2 mb-md-0 mb-3 border mt-3"type="search"placeholder="Service Type" aria-label="Search" list="servicetype"/>
              <datalist id="servicetype">
                
                <option value="Repair" />
                <option value="Visit for Estimation" />
                <option value="install" />
                <option value="Cleaning" />
                <option value="Visit to Diagnose" />
             
              </datalist>
          {/* </div> */}
               <div>
                   <label htmlFor="" className="fw-bold text-white"><br />Explain your problem (optional)</label>
                   <textarea class="form-control mt-md-3"  id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
          <button className='btn order-form-btn fw-bold w-100 mt-3'>Confirm Order</button>
       </form>
    </div>
    
  )
}
