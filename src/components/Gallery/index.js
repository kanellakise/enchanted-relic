import React from 'react';
import photo from "../../assets/small/webApps/fullFill.png"

function Gallery(props) {
  const currentCategory = {
    name: "webApps",
    description:
      "Deployed full stack web applications, each using MVC development structure and back end databases."
  };

  return (
    <section>
      <h1>{currentCategory.name}</h1>
      <p>{currentCategory.description}</p>
      <div className="flex-row">
        <img
          src={photo}
          alt="Web App Example"
          className="img-thumbnail mx-1"
        />
      </div>
    </section>
  );
}

export default Gallery;