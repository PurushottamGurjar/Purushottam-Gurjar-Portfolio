// App.jsx
import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { myData } from './assets/myasset';
import './App.css';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Contactme from './components/Contactme';
import Viewer from "./components/Viewer";
import PopupAI from "./components/PopupAI"
import chatMain from "./components/ChatMain"
import ChatMain from './components/ChatMain';

function App() {
  const navigate=useNavigate();
  const [nav,setNav]=useState("about");
  useEffect(()=>{
    navigate('/',{replace:true});
  },[])

  // document.onkeydown= function(e){
  //   if(e.key==="F12"  || 
  //     (e.ctrlKey && e.shiftKey && (e.key==='I' || e.key==='C' || e.key==="J")) || 
  //     (e.ctrlKey && e.key==="U")){
  //       alert("Inspecting is disabled by the Purushottam Gurjar for Non-Techies and for Techies they know : 'if It's a secret it must be in Backend. Techies know what to do....'");
  //       return false;
  //     }
   
  // }
  

  return (
    <div className="app-container">
      {/* Video Background */}
      <video autoPlay muted loop  className="background-video">
        <source src={myData.portfolioBackground} type="video/mp4" />
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
               <Link to='/AI-Divie' className={`nav-content ${nav==="AI-Divie"? "selected":"none"}`} onClick={()=>setNav("AI-Divie")} >AI-Divie</Link>
              {/* <Link to="/e-sarthee" className={`nav-content ${nav==="e-sarthee"? "selected":"none"}`} onClick={()=>setNav("e-sarthee")} >E-Sarthee</Link> */}
              <a href="https://esarthee.vercel.app/"  className={`nav-content ${nav==="esarthee"? "selected":"none"}`} onClick={()=>setNav("esarthee")} >E-Sarthee</a>
              <a href="https://p-tunes.vercel.app/"  className={`nav-content ${nav==="p-tunes"? "selected":"none"}`} onClick={()=>setNav("p-tunes")} >P-Tunes</a>
              <Link to='/contact' className={`nav-content ${nav==="contact"? "selected":"none"}`} onClick={()=>setNav("contact")} >Contact</Link>
              
            </nav>
            <img src={myData.profilePic} alt="Profile" className="profile" />
          </div>
        </header>
        <nav className="nav-second mobile-nav">

              <Link to="/about" className={`second-nav-content ${nav==="about"?"selected":""}`} onClick={()=>setNav("about")}>About</Link>
              <Link to='/about' className={`second-nav-content ${nav==="hello"?"selected":""}`} onClick={()=>window.open("https://ai-divie-purush-gurjar.vercel.app","_self")} >AI-Divie</Link>
              {/* <Link to="/e-sarthee" className={`second-nav-content ${nav==="e-sarthee"?"selected":""}`} onClick={()=>setNav("e-sarthee")} >E-Sarthee</Link> */}
              <a href="https://esarthee.vercel.app/"  className={`second-nav-content ${nav==="esarthee"?"selected":""}`} onClick={()=>setNav("esarthee")} >E-Sarthee</a>
              <a href="https://p-tunes.vercel.app/"  className={`second-nav-content ${nav==="p-tunes"?"selected":""}`} onClick={()=>setNav("p-tunes")} >P-Tunes</a>
              {/* <Link to='/contact' className={`second-nav-content ${nav==="contact"?"selected":""}`} onClick={()=>setNav("contact")} >Contact</Link> */}
          
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
        <Route path="/AI-Divie" element={<ChatMain/>} />
      </Routes>

      <Analytics/>
    </div>
  );
}

export default App;
