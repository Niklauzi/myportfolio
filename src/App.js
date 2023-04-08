import React from 'react';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import logo from './logo.svg'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner />
     <Skills />
     <Projects />
    </div>
  );
}

export default App;
