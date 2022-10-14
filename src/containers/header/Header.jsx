import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/kite.png';
import './header.css';
import { Link } from "react-router-dom";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Sunset Kiteboarding</h1>
      <p>With more than 16 years of experience. We offer a wide range of courses, downwinds, equipment rentals and kitetrips.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <Link to="/cadastro"><button type="button">Get Started</button></Link>

      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>120 people join us this summer</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
