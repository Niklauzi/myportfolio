import React from 'react';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner'
import logo from './logo.svg'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner />
    </div>
  );
}

export default App;
