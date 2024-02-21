import React from 'react'

const BookNow = () => {
  return (
    <>
      <div className="container mb-3" style={{marginTop: '100px'}}>
        {/* <form className='form'>
            <label htmlFor="" className='form-label'>Start Date</label>
            <input className='form-control' type="date" />
        </form> */}
        <div className="container-fluid ps-md-0">
            <div className="row g-0">
                <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                <div className="col-md-8 col-lg-6">
                <div className="login d-flex align-items-center py-5">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-lg-8 mx-auto">
                        <h3 className="login-heading mb-4">Book Your Car!</h3>

                        <form>
                            <div className="form-floating mb-3">
                                <input type="date" className="form-control" id="floatingInput"/>
                                <label for="floatingInput">Start date</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="date" className="form-control" id="floatingInput"/>
                                <label for="floatingInput">End date</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder='Alternate email'/>
                                <label for="floatingInput">Alternate email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword">Alternate phone</label>
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                                <label className="form-check-label" for="rememberPasswordCheck">
                                    Accept Terms & Condition
                                </label>
                            </div>

                            <div className="d-grid">
                            <button className="btn btn-lg btn-login text-uppercase fw-bold mb-2" type="submit" style={{background: '#01d28e'}}>BOOK HERE</button>
                            </div>

                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default BookNow
