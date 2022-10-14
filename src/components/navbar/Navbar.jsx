import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">Courses</a></p>
          <p><a href="#possibility">Downwinds</a></p>
          <p><a href="#features">Rentals</a></p>
          <p><a href="admin">Admin</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <a href='https://main--sunny-cajeta-c022bd.netlify.app/' target={'_blank'}>
        <button type="button">Launch dApp</button>
        </a>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">Courses</a></p>
            <p><a href="#possibility">Downwinds</a></p>
            <p><a href="#features">Rentals</a></p>
            <p><a href="admin">Admin</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
          <a href='https://main--sunny-cajeta-c022bd.netlify.app/' target={'_blank'}>
  
            <button type="button">Launch dApp</button>
          </a>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
