import React from 'react';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner />
     <Skills />
     <Projects />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
