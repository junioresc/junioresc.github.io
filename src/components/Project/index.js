import React from 'react';

function Project() {

  const projects = [
    {
      name: "Run Buddy",
      class: "run-buddy",
      tools: "HTML/CSS",
      link: "https://junioresc.github.io/run-buddy/",
    },
    {
      name: "Nomadica",
      class: "nomadica",
      tools: "HTML/CSS-Tailwind/JS",
      link: "https://dj-viking.github.io/Nomadica/",
    },
    {
      name: "Horiseon Refactor",
      class: "horiseon-refactor",
      tools: "HTML/CSS",
      link: "https://junioresc.github.io/horiseon-refactor/",
    },
    {
      name: "JavaScript Password Generator",
      class: "js-password-generator",
      tools: "HTML/CSS/JS",
      link: "https://junioresc.github.io/js-password-generator/",
    },
    {
      name: "Pizza Hunt",
      class: "pizza-hunt",
      tools: "MongoDB, Express, Node",
      link: "https://glacial-sands-00852.herokuapp.com/",
    },
    {
      name: "DC-Adopt",
      class: "dc-adopt",
      tools: "HTML-Handlebars/CSS/JS",
      link: "https://dc-adopt.herokuapp.com/signup",
    },
  ];

    return (
      <section className="page-section" id="work">
        <h2>Work</h2>
        <div className="grid-container">
          {projects.map((project, index) => (
          <a
          href={project.link}
          className={`grid-item ${project.class}`}
          key={index}
          >
            <div className="text">
              <h3>{project.name}</h3>
              <span>{project.tools}</span>
            </div>
          </a>
          ))}
        </div>
      </section>
    );
}

export default Project;