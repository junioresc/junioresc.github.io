import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/About';
import Project from './components/Project';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [workSelected, setWorkSelected] = useState(false);

  return (
    <div>
      <Header
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        workSelected={workSelected}
        setWorkSelected={setWorkSelected}
      />
      <Hero />
      <main>
        {workSelected ? <Project /> : contactSelected ? <ContactForm /> : <AboutMe />}
        <Footer />
      </main>
    </div>
  );
}

export default App;
