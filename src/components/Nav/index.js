import React from 'react';
import { NavLink } from 'react-router-dom';
import washingMachine from '../../assets/washing-machine-wash-svgrepo-com.svg';
import './style.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink exact to="/">
        <h1 className="title">
          <img
            src={washingMachine}
            className="title-logo"
            alt="washing-machine-logo"
          />
          Wash@Home
        </h1>
      </NavLink>
      <ul>
        <li>
          <NavLink
            to="/findMachine"
            activeClassName="link--active"
            className="link"
          >
            Trouver une machine
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/addMachine"
            activeClassName="link--active"
            className="link"
          >
            Ajouter une machine
          </NavLink>
        </li>
      </ul>
      <div className="nav-right">
        <img
          src="https://randomuser.me/api/portraits/women/14.jpg"
          className="nav-right-img"
          alt="logo"
        />
        <NavLink to="/connect" activeClassName="link--active" className="link">
          Se connecter
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
