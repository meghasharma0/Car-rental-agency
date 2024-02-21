import React from 'react'
import image2 from '../images/image_2.jpg'
import car6 from '../images/car-6.jpg'
import car5 from '../images/car-5.jpg'
import car7 from '../images/car-7.jpg'
import car8 from '../images/car-8.jpg'
import car9 from '../images/car-9.jpg'
import car10 from '../images/car-10.jpg'
import car12 from '../images/car-12.jpg'
import ServiceCard from './ServiceCard'

const Service = () => {
  return (
    <>
        <section>
            <div className='serviceContainer'>
                <div className="container-fluid d-flex flex-wrap carouselContainer">
                    <ServiceCard image={image2} name="Mercedes-Benz" rent={2000} />
                    <ServiceCard image={car6} name="Mercedes-Benz" rent={2000} />
                    <ServiceCard image={car5} name="Mercedes-Benz" rent={2000} />
                    <ServiceCard image={car7} name="Mercedes-Benz" rent={2000} />
                    <ServiceCard image={car8} name="Mercedes-Benz" rent={2000} />
                    <ServiceCard image={car9} name="Mercedes-Benz" rent={2000} />
                    <ServiceCard image={car10} name="Mercedes-Benz" rent={2000} />
                    <ServiceCard image={car12} name="Mercedes-Benz" rent={2000} />
                </div>
            </div>
        </section>
    </>
  )
}

export default Service
