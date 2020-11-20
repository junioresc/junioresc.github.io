import React, { useState } from 'react';
import Modal from '../Modal';

function Project() {
  const projects = [
    {
      name: 'Run Buddy',
      class: 'run-buddy',
      tools: 'HTML/CSS',
      deployed: 'https://junioresc.github.io/run-buddy/',
      github: 'https://github.com/junioresc/run-buddy',
      description:
        "This webpage made to showcase what can be achieved with HTML5 and CSS3. Run Buddy is a fictional fitness website and it has all the features to attract and keep the attention of the visitor. A nice big Jumbotron with a call to action and form to collect the visitor's information if they are interested in the service being advertised.",
      photo: 'run-buddy.jpg',
    },
    {
      name: 'Nomadica',
      class: 'nomadica',
      tools: 'HTML/CSS-Tailwind/JS',
      deployed: 'https://dj-viking.github.io/Nomadica/',
      github: 'https://github.com/Dj-Viking/Nomadica',
      description:
        "Have you ever thought about packing your bags and starting over somewhere new? It's tempting, but it can be distressing not knowing how people with your occupation fare financially in a foreign land. Nomadica’s purpose is to give you the information needed to make an informed, confident decision about relocating.",
      photo: 'nomadica.jpg',
    },
    {
      name: 'Shop-Shop',
      class: 'shop-shop',
      tools: 'HTML/CSS/JS/React/Redux',
      deployed: 'https://murmuring-shelf-28748.herokuapp.com/',
      github: 'https://github.com/junioresc/shop-shop',
      description:
        'This application is an e-commerce site that showcases multiple products. If you have an account created, you can add items to your shopping cart and once you finish shopping you can checkout. We process payments securely using the Stripe API.',
      photo: 'shop-shop.PNG',
    },
    {
      name: 'JavaScript Password Generator',
      class: 'js-password-generator',
      tools: 'HTML/CSS/JS',
      deployed: 'https://junioresc.github.io/js-password-generator/',
      github: 'https://github.com/junioresc/js-password-generator',
      description:
        'This application was made in order to produce a random password at the request of the user. The password must be at least 8 characters long and no more than 128. It handles edge cases in case the user decides to not input a response. The generator will accept at least one of the following character types: Uppercase, Lowercase, Numbers, Special Characters.',
      photo: 'password-gen-site.PNG',
    },
    {
      name: 'Pizza Hunt',
      class: 'pizza-hunt',
      tools: 'MongoDB, Express, Node',
      deployed: 'https://glacial-sands-00852.herokuapp.com/',
      github: 'https://github.com/junioresc/pizza-hunt',
      description:
        'Pizza Hunt—a self-aware riff on social-media applications that already exist for other topics—lets users connect with each other based on their love of pizza. In Pizza Hunt, users can share and discuss their dream pizza-topping combinations. Pizza is ubiquitous in everyday life all over the world, and no application has ever been created with the sole purpose of facilitating discussions about it.',
      photo: 'pizza-hunt.PNG',
    },
    {
      name: 'DC-Adopt',
      class: 'dc-adopt',
      tools: 'HTML-Handlebars/CSS/JS',
      deployed: 'https://dc-adopt.herokuapp.com/signup',
      github: 'https://github.com/hannahbrijenkins/DC-Adopt',
      description:
        'Sometimes we find ourselves in a situation where we have to make a difficult decision. Perhaps we get sick, have to move far away, or maybe you come across a stray that you can’t keep. Finding a no-kill shelter can be tough, and even with finding one, shelters can be filled with diseases, and pets too often do not get the best care. We decided to cut out the middle-man, allowing pet owners to connect with each other online and find a forever-home for their pet.',
      photo: 'dc-adopt.PNG',
    },
    {
      name: 'OtakuHQ',
      class: 'otakuhq',
      tools: 'React/CSS/JS',
      deployed: 'https://otakuhq.herokuapp.com/',
      github: 'https://github.com/Kos-MosV4/otakuhq',
      description:
        "Have you ever thought about all the anime you're currently watching? Can you remember every single one? Wouldn't it be cool to keep track of all the anime's you're watching all in a single place? Well OtakuHQ is the website made specifically for that. Made by Otakus for other Weebs to enjoy and congregate. OtakuHQ allows you to search for whatever anime of your choosing. There is also a section detailing the most popular anime and the current trending anime that is airing on TV.",
      photo: 'otakuhq.png',
    },
  ];

  const [currentProject, setCurrentProject] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (project, i) => {
    setCurrentProject({ ...project, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="page-section" id="work">
      <h2>Work</h2>
      {isModalOpen && (
        <Modal currentProject={currentProject} onClose={toggleModal} />
      )}
      <div className="grid-container">
        {projects.map((project, i) => (
          <div
            className={`grid-item ${project.class}`}
            onClick={() => toggleModal(project, i)}
            key={project.name}
          >
            <div className="text">
              <h3>{project.name}</h3>
              <span>{project.tools}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
