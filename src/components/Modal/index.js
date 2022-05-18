import React from 'react';

function Modal({currentPhoto}) {

  const {title, category, description, technologiesUsed, deployedSite, gitHubRepo, index} = currentPhoto;

  return (

    <div className='modalBackdrop'>
      <div className='modalContainer'>
        <h3 className='modalTitle'>{title}</h3>
        <img src={require(`../../assets/large/${category}/${index}.png`)} alt={`${title}`} />

        <h4>Description</h4>
        <p>
          {description}
        </p>
        <h4>Technologies Used</h4>
        <p>
          {technologiesUsed}
        </p>
        <a href={`${deployedSite}`} target='about_blank'>
          Deployed Site
        </a>
        <a href={`${gitHubRepo}`} target='about_blank'>
          GitHub Repository
        </a>
        <button type='button'>
          Close this modal
        </button>
      </div>
    </div>

  );
}

export default Modal;