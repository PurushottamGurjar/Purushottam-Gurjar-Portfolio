// App.jsx
import { useEffect, useState } from 'react';
import { myData } from './assets/myasset';
import './App.css';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Contactme from './components/Contactme';
import Viewer from "./components/Viewer";
import PopupAI from "./components/PopupAI"

function App() {
  const navigate=useNavigate();
  const [nav,setNav]=useState("about");
  useEffect(()=>{
    navigate('/',{replace:true});
  },[])

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
        
              <Link to="/about" className={`nav-content ${nav==="about"? "selected":""}`} onClick={()=>setNav("about")}
              >About</Link>
              <Link to="/e-sarthee" className={`nav-content ${nav==="e-sarthee"? "selected":"none"}`} onClick={()=>setNav("e-sarthee")} >E-Sarthee</Link>
              <a href="https://p-tunes-purush-gurjar.vercel.app/"  className={`nav-content ${nav==="p-tunes"? "selected":"none"}`} onClick={()=>setNav("p-tunes")} >P-Tunes</a>
              <Link to='/contact' className={`nav-content ${nav==="contact"? "selected":"none"}`} onClick={()=>setNav("contact")} >Contact</Link>
              
            </nav>
            <img src={myData.profilePic} alt="Profile" className="profile" />
          </div>
        </header>
        <nav className="nav-second mobile-nav">

              <Link to="/about" className={`second-nav-content ${nav==="about"?"selected":""}`} onClick={()=>setNav("about")}>About</Link>
              <Link to="/e-sarthee" className={`second-nav-content ${nav==="e-sarthee"?"selected":""}`} onClick={()=>setNav("e-sarthee")} >E-Sarthee</Link>
              <a href="https://p-tunes-purush-gurjar.vercel.app/"  className={`second-nav-content ${nav==="p-tunes"?"selected":""}`} onClick={()=>setNav("p-tunes")} >P-Tunes</a>
              <Link to='/contact' className={`second-nav-content ${nav==="contact"?"selected":""}`} onClick={()=>setNav("contact")} >Contact</Link>
          
        </nav>
        <PopupAI/>

      </div>

      {/* <Portfolio/> */}
      <Routes>
        <Route path="*" element={<Portfolio/>} />
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
