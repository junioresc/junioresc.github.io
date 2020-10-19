import React from 'react';

function AboutMe() {

    return (
      <section className="page-section" id="about">
        <h2>About Me</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem ducimus mollitia nemo deleniti distinctio ab labore
            aliquid laudantium numquam, quam laboriosam doloribus accusantium
            quidem, cum commodi impedit ipsum placeat inventore. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Non vitae explicabo
            optio provident esse, fugit consectetur cumque dicta? Esse unde
            minima temporibus adipisci maxime harum cupiditate alias explicabo,
            exercitationem ipsa?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque sed
            soluta cum non magni laudantium eum illo autem quae accusamus nihil
            expedita quam illum odio atque, architecto necessitatibus
            dignissimos odit. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Distinctio doloremque officia quis, exercitationem
            maiores tempora aspernatur excepturi earum commodi nihil sit ab,
            facilis corrupti molestiae obcaecati pariatur hic quia perspiciatis.
          </p>
          <div className="skills">
            <h2>Front-End Proficiencies</h2>
            <ul>
              <li>Semantic HTML</li>
              <li>Modern CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Mobile-First Design</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="skills">
            <h2>Back-End Proficiencies</h2>
            <ul>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
            </ul>
          </div>
        </div>
      </section>
    );
}

export default AboutMe;