import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ image, name, rent }) => {
  return (
    <>
      <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title ms-2">{ name }</h5>
                <p className="card-text ms-2">Rs. { rent } per hour</p>
                <Link to="/booking-car" className="btn bookNowBtn w-100">Book now</Link>
            </div>
        </div>
    </>
  )
}

export default Card
