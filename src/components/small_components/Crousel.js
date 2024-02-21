import React from "react";
import car1 from './../../images/car-1.jpg';
import car3 from './../../images/car-3.jpg';
import car4 from './../../images/car-4.jpg';
import Card from "./Card";

const Crousel = () => {
  return (
    <>
    <div style={{background: "rgb(247, 247, 247)"}}>
      <p className="text-center text-primary mt-4 pt-5">WHAT WE OFFER</p>
      <h1 className="text-center mb-4 pb-4">Featured Vehicles</h1>
      <div className="container-fluid carouselContainer">
        <Card image={car1} name="Mercedes-Benz" rent={2000} />
        <Card image={car3} name="McLaren 720S" rent={2500} />
        <Card image={car4} name="Mustang" rent={1500} />
      </div>
    </div>
    </>
  );
};

export default Crousel;
