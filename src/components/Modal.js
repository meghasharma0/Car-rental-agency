import React from 'react'

const Modal = ({ handleClose, show }) => {

    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <>
      <div className={showHideClassName}>
            <section className='modal-main'>
                <form className='p-4'>
                <div className="mb-3">
                    <input className='form-control p-3' type="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                    <input className='form-control p-3' type="text" placeholder="New password" />
                </div>
                <div className="mb-3">
                    <input className='form-control p-3' type="text" placeholder="Re-enter password" />
                </div>
                <div className='d-flex align-items-center justify-content-end'>
                    <button className='btn btn-dark mx-3 px-3' onClick={handleClose}>Close</button>
                    <button className='btn px-3' type="submit" style={{background: "#01d28e"}}>Submit</button>
                </div>
                </form>
            </section>
        </div>
    </>
  )
}

export default Modal
