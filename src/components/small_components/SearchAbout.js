import React from 'react'
import about from '../../images/about.jpg'
import { useNavigate } from 'react-router-dom'

const SearchAbout = () => {

  const navigate = useNavigate();

  return (
    <div className='d-flex searchAboutContainer'>
      <img className='ms-5' src={about} />
      <div>
        <p>ABOUT US</p>
        <h1>Welcome to Carbook</h1>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        <button className='btn btn-primary p-3' onClick={() => navigate('/service')}>Search Vehicle</button>
      </div>
    </div>
  )
}

export default SearchAbout
