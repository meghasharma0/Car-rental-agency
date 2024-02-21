import React, { useEffect, useRef, useState } from 'react'
import Login from './small_components/Login'
import Signup from './small_components/Signup'
import Crousel from './small_components/Crousel';
import SearchAbout from './small_components/SearchAbout';

const Home = () => {

    const [formComp, setFormComp] = useState(<Login />);
    const signupRef = useRef(null);
    const loginRef = useRef(null);

    useEffect(() => {
        loginRef.current.classList.add('bottomBorder');
    }, []);

    const handleSignup = () => {
        setFormComp(<Signup />);
        loginRef.current.classList.remove('bottomBorder');
        signupRef.current.classList.add('bottomBorder');
    }
    const handleLogin = () => {
        setFormComp(<Login />);
        signupRef.current.classList.remove('bottomBorder');
        loginRef.current.classList.add('bottomBorder');
    }

  return (
    <>
        <section>
            <div className='homeContainer'>
                <h1 className='my-4 text-center'>Fast & Easy Way To Rent A Car</h1>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
            </div>
        </section>
        <section>
            <div>
                <div className='formSelectBtn'>
                    <button className='loginSelectBtn mx-3 py-2 px-4 fw-bold' onClick={ handleLogin } ref={ loginRef }>Login</button>
                    <button className='signupSelectBtn mx-3 py-2 px-4 fw-bold' onClick={ handleSignup } ref={ signupRef }>Signup</button>
                </div>
                { formComp }
            </div>
        </section>
        <section>
            <Crousel />
        </section>
        <section>
            <SearchAbout />
        </section>
    </>
  )
}

export default Home
