import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  const navRef = useRef(null);
  const navLinkRef = useRef([]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 250) {
        navRef.current.classList.add('scrolled');
        navLinkRef.current.forEach((elem) => {
          elem.classList.add('scrolledColor');
        });
      } else {
        navRef.current.classList.remove('scrolled');
        navLinkRef.current.forEach((elem) => {
          elem.classList.remove('scrolledColor');
        });
      }
    };
    if (location.pathname !== '/') {
      navRef.current.classList.add('navbar-colored');
      navLinkRef.current.forEach((elem) => {
        elem.classList.add('scrolledColor');
      });
    } else {
      window.addEventListener('scroll', handleScroll);
      navRef.current.classList.remove('navbar-colored');
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (location.pathname === '/') {
        navRef.current.classList.remove('navbar-colored');
        navLinkRef.current.forEach((elem) => {
          elem.classList.remove('scrolledColor');
        });
      }
    };
  }, [location.pathname]);
  
  const addNavLinkRef = (element) => {
    if (element && !navLinkRef.current.includes(element)) {
      navLinkRef.current.push(element);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg px-4 py-3 fixed-top" ref={navRef}>
      <div className="container-fluid">
        <a className="navbar-brand navbarBrand" href="#">
          <span>CAR</span><span className='book'>BOOK</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <Link className="nav-link" aria-current="page" to='/' ref={addNavLinkRef}>Home</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" aria-current="page" to='/service' ref={addNavLinkRef}>Service</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" aria-current="page" to='/status' ref={addNavLinkRef}>Status</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
