import React from 'react';

function Nav() {
  const categories = [
    {
      name: "webApps",
      title: "Web Apps",
      description: "Deployed full stack web applications, each usind MVC development structure and back end databases."
    },
    {
      name: "basicApps",
      title: "Basic Apps",
      description: "These applications were created using HTML5, CSS3, some JavaScript, and are deployed directly to GitHub Pages."
    },
    {
      name: "commandLineApps",
      title: "Command Line Apps",
      description: "These applications require to be run through the command line with help of Node.js."
    }
  ]

  function categorySelected(name) {
    console.log(`${name} clicked`)
  }

  return (
    <header>
      <h2>
        <a href="/">
          <span role="img" aria-label="rocketShip">🚀</span> Woosh!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">
              About Me
            </a>
          </li>
          <li className="mx-2">
            <span>Contact</span>
          </li>
          <li className="mx-2">
            <a href="https://drive.google.com/file/d/1rmrTVq4HOX8tmwCUQY8sUeiLhjWYpm3U/view?usp=sharing" target="about_blank">Resume</a>
          </li>
          {categories.map((category) => (
            <li
              className="mx-1"
              key={category.name}
            >
              <span onClick={() => categorySelected(category.name)}>
                {category.title}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;