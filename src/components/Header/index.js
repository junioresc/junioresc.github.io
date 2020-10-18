import React from 'react';
import Nav from '../Nav';

function Header({ contactSelected, setContactSelected, workSelected, setWorkSelected }) {

  return (
    <header>
      <h1>
        <a href="/">Junior Escobar</a>
      </h1>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        workSelected={workSelected}
        setWorkSelected={setWorkSelected}
      />
    </header>
  );
}

export default Header;