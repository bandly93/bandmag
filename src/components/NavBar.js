import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../data/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/navbar.css';

const NavBar = () => {
  return(
    <div className = 'navbar-container'>
      <div className = 'logo'>
        <h3>Magnitude.io</h3>
      </div>
      <div className = 'banner'>
        <img id = 'banner-img' src = {require('../assets/profile.jpeg')} alt = 'profilepic' />
        <div id = 'banner-text'>
          <p>Band Ly</p>
          <p>Instructor</p>
        </div>
      </div>
      <div className = 'nav-routes'>
        {
          routes.map((route,i) => <Link to = {route.path} key = {i}> 
            <FontAwesomeIcon className = 'nav-fa' icon = {route.icon} size = '2x'/>
            <p className = 'nav-text'> { route.name } </p>
          </Link>)
        }
      </div>
    </div>
  )
}

export default NavBar;