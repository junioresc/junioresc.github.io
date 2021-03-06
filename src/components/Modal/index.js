import React from "react";

function Modal({ onClose, currentProject }) {
  const { name, tools, deployed, github, description, photo } = currentProject;
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img
          src={require(`../../assets/images/screenshots/${photo}`)}
          alt="current project"
        />
        <p className="tools">{tools}</p>
        <address>
          <a href={github}>
            <i className="fab fa-github-square big"></i> View code on GitHub
          </a>
          <a href={deployed}>
            <i className="fab fa-product-hunt"></i> View deployed application
          </a>
        </address>
        <p>{description}</p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
}

export default Modal;
