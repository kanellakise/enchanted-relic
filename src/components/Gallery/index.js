import React from 'react';
import PhotoList from '../PhotoList';

function Gallery({ currentCategory }) {
  const { title, description } = currentCategory;

  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}

export default Gallery;