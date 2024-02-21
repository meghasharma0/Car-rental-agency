import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({ image, name, rent }) => {
  return (
    <>
      <div className="card p-2 mb-4 serviceCard">
            <img className="card-img-top" src={image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title ms-2">{ name }</h5>
                <p className="card-text ms-2">Rs. { rent } per hour</p>
                <Link to="/booking-car" className="btn bookNowBtn">Book now</Link>
            </div>
        </div>
    </>
  )
}

export default ServiceCard
