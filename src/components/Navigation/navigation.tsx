import React, { useState, useEffect, useRef } from 'react';
import rocketImg from "../../assets/Mid_Arts_a_logo_of_a_marketing_agency_rocket_main_color_red_bla_d85a5cb1-8086-437a-afcf-19d1615c1004-removebg.png";
import './nav.scss';
import useScrollListener from '../../hooks/useScroll';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const navigationRef = useRef<HTMLDivElement>(null);
    const useScroll=useScrollListener();

    useEffect(() => {
            navigationRef.current!.style.top=useScroll.y>useScroll.lastY?"-120px":"0px";
    },[useScroll.lastY,useScroll.y,navigationRef.current]);


  return (
    <header ref={navigationRef} id="navigation">
      <div className="logo">
        <Link to={"/"}>
          <img
            src={rocketImg}
            alt="Logo"
            width="100px"
            height="100px"
          />
        </Link>
      </div>
      <nav>
        <ul className="nav-bar">
          <li>
            <Link to={"/"} className="nav-element">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/"} className="nav-element">
              Services
            </Link>
          </li>
          <li>
            <Link to={"/"} className="nav-element">
              Blog
            </Link>
          </li>
          <li>
            <Link to={"/"} className="nav-element">
              About Us
            </Link>
          </li>
          <li>
          <div className="contact-us">Contact us</div>
          </li>
        </ul>
      </nav>
      
    </header>
  );
}
