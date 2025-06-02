// App.jsx
import { useState } from 'react';
import { myData } from './assets/myasset';
import './App.css';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Contactme from './components/Contactme';
import Viewer from "./components/Viewer";

function App() {
  const navigate=useNavigate();

  return (
    <div className="app-container">
      {/* Video Background */}
      <video autoPlay muted loop className="background-video">
        <source src={myData.starsBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
      {/* Overlay Content */}
      <div className="content">
        Header 
         <header className="header">
          <div className="logo-name">
            <img className="ptune-logo" src={myData.PtuneLogo} alt="Purush" />
            <span className="name">Purushottam Gurjar</span>
          </div>
          <div className="nav-profile">
            <nav className="nav desktop-nav">
        
              <Link to="/about" className="nav-content selected" >About</Link>
              <Link to="/e-sarthee" className="nav-content" >E-Sarthee</Link>
              <a href="https://p-tunes-purush-gurjar.vercel.app/"  className="nav-content" >P-Tunes</a>
              <Link to='/contact' className="nav-content" >Contact</Link>
              
            </nav>
            <img src={myData.profilePic} alt="Profile" className="profile" />
          </div>
        </header>
        <nav className="nav-second mobile-nav">

              <Link to="/about" className="second-nav-content selected" >About</Link>
              <Link to="/e-sarthee" className="second-nav-content " >E-Sarthee</Link>
              <a href="https://p-tunes-purush-gurjar.vercel.app/"  className="second-nav-content" >P-Tunes</a>
              <Link to='/contact' className="second-nav-content" >Contact</Link>
          
        </nav>

      </div>

      {/* <Portfolio/> */}
      <Routes>
        <Route path="/" element={<Portfolio/>} />
        <Route path="/home" element={<Portfolio/>} />
        <Route path='/about'  element={<Portfolio/>}/>
        <Route path='/contact'  element={<Contactme/>}/>
        <Route path="/e-sarthee" element={<Viewer/>} />
      </Routes>
    </div>
  );
}

export default App;
