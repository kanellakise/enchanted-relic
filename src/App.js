import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from "./components/Gallery";
import ContactDisplay from './components/Contact';

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
      name: "webApps",
      title: "Web Apps",
      description: "Deployed full stack web applications, each using MVC development structure and back end databases."
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
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <div className='container'>
        <main>
          {!contactSelected ? (
            <>
              <Gallery currentCategory={currentCategory}></Gallery>
              <About></About>
            </>
          ) : (
            <ContactDisplay></ContactDisplay>
          )}
        </main>
        <footer>
        </footer>
      </div>
    </>
  );
}

export default App;
