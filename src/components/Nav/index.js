import React from 'react';

function Nav(props) {
  const {
    contactSelected,
    setContactSelected,
    workSelected,
    setWorkSelected,
  } = props;

  return (
    <nav className="select">
      <a
        href="#about"
        onClick={() => {
          setContactSelected(false);
          setWorkSelected(false);
        }}
      >
        About Me
      </a>
      <a
        href="#work"
        className={`${workSelected && 'navActive'}`}
        onClick={() => {
          setWorkSelected(true);
          setContactSelected(false);
        }}
      >
        Work
      </a>
      <a
        href="#contact"
        className={`${contactSelected && 'navActive'}`}
        onClick={() => {
          setContactSelected(true);
          setWorkSelected(false);
        }}
      >
        Contact Me
      </a>
      <a href="assets\resources\resume.pdf" download>
        Resume <i class="fas fa-download"></i>
      </a>
    </nav>
  );
}

export default Nav;
