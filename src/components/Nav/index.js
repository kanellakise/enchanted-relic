import React, { useEffect } from 'react';
import coverImage from "../../assets/cover/cover-image.jpeg";
// import avatar from '../../assets/cover/epic.jpeg';

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
      <div>
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        <nav>
          <div className='nav-wrapper'>
            <a href="#!" className='brand-logo'>Elijah Kanellakis</a>
            <ul id='nav-mobile' className="right hide-on-med-and-down">
              <li className="">
                <a href="#about" onClick={() => setContactSelected(false)}>
                  About Me
                </a>
              </li>
              <li className={`${contactSelected && 'navActive'}`}>
                <span onClick={() => setContactSelected(true)}>Contact</span>
              </li>
              <li className=''>
                <a href="https://drive.google.com/file/d/1rmrTVq4HOX8tmwCUQY8sUeiLhjWYpm3U/view?usp=sharing" target="about_blank">Resume</a>
              </li>
              {categories.map((category) => (
                <li
                  className={`${currentCategory.name === category.name && !contactSelected && 'navActive'
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
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;