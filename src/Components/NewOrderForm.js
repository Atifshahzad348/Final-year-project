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
            <input className="form-control me-2 p-2 mb-md-0 mb-3 border mt-3" type="search" placeholder="Name" aria-label="Search"/>
       
        </form>
    </div>
    
  )
}
