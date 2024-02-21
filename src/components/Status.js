import React from 'react'
import car2 from './../images/car-2.jpg'

const Status = () => {
  return (
    <>
        <section>
            <div className='statusContainer'>
              <div className="row" style={{width: "100%"}}>
                <div className="col-lg-3 statusImgContainer">
                  <img src="https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg" alt="" />
                </div>
                <div className="col-lg-9 statusInfoContainer">
                  <h2>YOUR NAME</h2>
                </div>
              </div>
              {/* Booked cars */}
              <section className="mt-4 py-5" style={{backgroundColor: "#01d28e", height: 'fit-content'}}>
                <div className="container h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                      <h3 className='mb-4'>Car Booked Status</h3>
                      {/* card body start */}
                      <div className="card mb-4">
                        <div className="card-body p-4 mb-3">
                          <div className="row align-items-center">
                            <div className="col-md-6">
                              <img src={car2}
                                className="img-fluid" alt="Generic placeholder image"/>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center">
                              <div>
                                <p className="small text-muted mb-4 pb-2">Specifications & Description</p>
                                <p className="lead fw-normal mb-0 fs-6">Name - Range Rover</p>
                                <p className="lead fw-normal mb-0 fs-6">Rent - 2000 per day</p>
                                <p className="lead fw-normal mb-0 fs-6">Booked status - <span className='text-success fw-bold'>Booked</span></p> <hr />
                                <p className="lead fw-normal mb-0 fs-6">[Model - xyz], [No - 123], [Seating capacity - 4]</p>
                                <button className='btn btn-danger mt-4'>Cancel booking</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* card body ends */}
                    </div>
                  </div>
                </div>
              </section>
            </div>
        </section>
    </>
  )
}

export default Status
