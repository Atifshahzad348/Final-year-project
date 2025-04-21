import React from 'react'

export default function ServiceCards(props) {
  return (
    <div>
      <div className="card">
       <img src="{props.imglink}" className="card-img-top" alt="..."/>
       <div className="card-body">
       <h5 className="card-title">{props.cardTitle}</h5>
       <p className="card-text">{props.paragraph}</p>  
       <button className='btn '>book now</button>
    </div>
</div>
    </div>
  )
}
