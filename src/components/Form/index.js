import React from 'react';
import './style.scss';
const Form = () => {
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
      }}
      className="form"
    >
      <input
        className="form-input"
        type="text"
        placeholder="où cherchez vous?"
      />
      <input
        className="form-input"
        type="date"
        placeholder="quand cherchez-vous?"
      />
      <button type="submit" className="form-button">
        Rechercher
      </button>
    </form>
  );
};

export default Form;
