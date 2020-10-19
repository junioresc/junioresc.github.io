import React from 'react';

function Footer() {

    return (
      <footer className="page-section contact" id="contact">
        <address>
          <a href="tel:+5615778575">
            <i className="fas fa-mobile-alt big"></i> Phone Number
          </a>
          <a href="mailto:junioresc1092@gmail.com">
            <i className="far fa-envelope big"></i> Email
          </a>
          <a href="https://github.com/junioresc">
            <i className="fab fa-github-square big"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/junior-escobar-87a8541a7/">
            <i className="fab fa-linkedin big"></i> LinkedIn
          </a>
        </address>
      </footer>
    );
}

export default Footer;