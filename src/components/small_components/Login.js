import React, { useState } from 'react'
import Modal from '../Modal';

const Login = () => {
  
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className='container formContainer'>
        <form>
            <div className="mb-3">
                <input type="email" className="form-control p-3" placeholder='Email'/>
            </div>
            <div className="mb-3">
                <input type="password" className="form-control p-3"  placeholder='Password'/>
            </div>
            <div className="mb-3 text-center">
                <p onClick={togglePopup} style={{cursor: 'pointer'}}>Forgotten Password</p>
                <Modal show={showPopup} handleClose={togglePopup} />
            </div>
            <button type="submit" className="btn p-3 w-100 text-white" style={{background: "#01d28e"}}>Login</button>
        </form>
      </div>
    </>
  )
}

export default Login
