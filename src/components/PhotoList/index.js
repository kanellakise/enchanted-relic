import React, { useState } from 'react';
import Modal from '../Modal';

function PhotoList({ category }) {

  const [currentPhoto, setCurrentPhoto] = useState();

  // May implement function to separate technologies used into buttons/badges
  const [photos] = useState([
    {
      title: "FullFill!",
      category: 'webApps',
      description: 'FullFill! is a Full Stack, Single Page Application that allows expecting mothers to create wishlists that others may view and fulfill if they so choose.',
      technologiesUsed: 'React, JavaScript, GraphQL, Apollo, MongoDB, Mongoose, Chakra, HTML5, CSS3, Deployed to Heroku, Created by a Dev group',
      deployedSite: 'https://fullfillbabyregistry.herokuapp.com/',
      gitHubRepo: 'https://github.com/pardue95/group-5-project-3'
    },
    {
      title: "Ye Olde Tech Blog",
      category: 'webApps',
      description: 'This is a Full Stack, Single Page Application where users from throughout time can create an account, sign in, create posts, and comment on posts about their technological discoveries throughout history.',
      technologiesUsed: 'MVC structure, MySQL, custom RESTful API, JavaScript, Express, Sequelize, Handlebars, bcrypt, dotenv, Bulma, HTML5, CSS3, Deployed to Heroku, Created personally',
      deployedSite: 'https://fast-basin-96296.herokuapp.com/',
      gitHubRepo: 'https://github.com/kanellakise/MVC-techBlog-ELK-Wk14'
    },
    {
      title: 'Weather GiFinder',
      category: 'webApps',
      description: 'Weather GiFinder is an easy-to-use Front End application, where users may search for a location and receive not only weather data for that area, but 3 gifs related to the area and the current weather status.',
      technologiesUsed: 'Two third party APIs, JavaScript, Bulma, HTML5, CSS3, Created by a Dev group',
      deployedSite: 'https://kanellakise.github.io/group1-groupProject1/',
      gitHubRepo: 'https://github.com/kanellakise/group1-groupProject1.git'
    },
    {
      title: 'Rough Stock Rodeo',
      category: 'webApps',
      description: 'Rough Stock Rodeo is a Full Stack, Single Page Application where users may sign up, sign in, and register, edit, and delete their contestants from a roster for a rodeo event.',
      technologiesUsed: 'MySQL, Sequelize, custom RESTful API, JavaScript, Bulma, HTML5, CSS3, Created by a Dev group',
      deployedSite: 'https://rough-stock-rodeo.herokuapp.com/',
      gitHubRepo: 'https://github.com/kanellakise/roughStockRodeo-Group7-Project2'
    },
    // {
    //   title: '',
    //   category: 'basicApps',
    //   description: '',
    //   technologiesUsed: '',
    //   deployedSite: '',
    //   gitHubRepo: ''
    // },
    // {
    //   title: '',
    //   category: 'basicApps',
    //   description: '',
    //   technologiesUsed: '',
    //   deployedSite: '',
    //   gitHubRepo: ''
    // },
    // {
    //   title: '',
    //   category: 'basicApps',
    //   description: '',
    //   technologiesUsed: '',
    //   deployedSite: '',
    //   gitHubRepo: ''
    // },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i});
  }

  return (
    <div>
      <Modal currentPhoto={currentPhoto} />
      <div className="flexRow">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.png`)}
            alt={image.title}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.title}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;