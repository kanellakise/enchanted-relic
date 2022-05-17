import React, { useEffect } from 'react';

function Nav(props) {

  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
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
            <a href="#about" onClick={() => setContactSelected(false)}>
              About Me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li className="mx-2">
            <a href="https://drive.google.com/file/d/1rmrTVq4HOX8tmwCUQY8sUeiLhjWYpm3U/view?usp=sharing" target="about_blank">Resume</a>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span onClick={() => {
                setCurrentCategory(category);
                setContactSelected(false);
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