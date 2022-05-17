import React, { useEffect } from 'react';

function Nav(props) {

  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

useEffect(() => {
  document.title = (currentCategory.title);
}, [currentCategory]);

  return (
    <header>
      <h2>
        <a href="/">
          <span role="img" aria-label="rocketShip">
            {" "}
            🚀
            {" "}
          </span>{" "}
          Elijah Kanellakis
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
              className={`mx-1 ${currentCategory.name === category.name && 'navActive'
                }`} key={category.name}
            >
              <span onClick={() => {
                setCurrentCategory(category)
              }}
              >
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