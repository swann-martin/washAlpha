import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const UserSettings = () => {
  return (
    <div className="user-settings">
      <ul className="user-settings__list user-settings__list--1">
        <Link to="" className="user-settings__list__link">
          Message
        </Link>
        <Link to="" className="user-settings__list__link">
          Mes favoris
        </Link>
        <Link to="" className="user-settings__list__link">
          Mes lavages
        </Link>
      </ul>
      <hr />
      <ul className="user-settings__list user-settings__list--2">
        <Link to="" className="user-settings__list__link">
          Compte
        </Link>
        <Link to="" className="user-settings__list__link">
          Créer un programme
        </Link>
        <Link to="" className="user-settings__list__link">
          Ajouter une machine
        </Link>
      </ul>
      <hr />
      <ul className="user-settings__list user-settings__list--3">
        <Link to="" className="user-settings__list__link">
          Aide
        </Link>
        <Link to="" className="user-settings__list__link">
          Déconnexion
        </Link>
      </ul>
    </div>
  );
};

export default UserSettings;
