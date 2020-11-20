import React from 'react';

function AboutMe() {
  return (
    <section className="page-section" id="about">
      <h2>About Me</h2>
      <div>
        <p className="about">
          Passionate Full-Stack Web Developer with a deep enthusiasim for both
          computer hardware and software. Always excited to study new things and
          I'm confident in my ability to learn something new and put it into
          production. Recently earned a certificate in Full-Stack Web
          Development from the University of Central Florida, where I built up
          and improved my skills in the MERN stack, MongoDB, Express.js,
          React.js, Node.js, and also in JavaScript, HTML and CSS. I enjoy
          spending my free time familiarizing myself with web development and
          building new and difficult projects.
        </p>
        <div className="skills">
          <h2>Front-End Proficiencies</h2>
          <ul>
            <li>
              <i class="fab fa-html5"></i> Semantic HTML
            </li>
            <li>
              <i class="fab fa-css3-alt"></i> Modern CSS
            </li>
            <li>
              <i class="fab fa-sass"></i> SASS
            </li>
            <li>
              <i class="fab fa-js"></i> JavaScript
            </li>
            <li>
              <i class="far fa-file-code"></i> jQuery
            </li>
            <li>
              <i class="fas fa-mobile-alt"></i> Mobile-First Design
            </li>
            <li>
              <i class="fab fa-react"></i> React
            </li>
            <li>
              <i class="fas fa-code"></i> Bootstrap
            </li>
          </ul>
        </div>
        <div className="skills">
          <h2>Back-End Proficiencies</h2>
          <ul>
            <li>
              <i class="fab fa-node-js"></i> Node
            </li>
            <li>
              <i class="fab fa-jsfiddle"></i> Express
            </li>
            <li>
              <i class="fas fa-table"></i> MySQL
            </li>
            <li>
              <i class="fab fa-wpforms"></i> Sequelize
            </li>
            <li>
              <i class="fas fa-database"></i> MongoDB
            </li>
            <li>
              <i class="fas fa-sitemap"></i> Mongoose
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
