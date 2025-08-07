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
import ChatMain from './components/ChatMain';

function App() {
  const navigate=useNavigate();
  const [nav,setNav]=useState("about");
  useEffect(()=>{
    navigate('/',{replace:true});
  },[])

  return (
    <div className="app-container">
      {/* Video Background
      <video autoPlay muted loop  className="background-video">
        <source src={myData.portfolioBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      
      {/* Overlay Content */}
      <div className="content">
        Header 
         <header className="header">
          <div className="logo-name">
            <img className="purush-logo" src={myData.PurushLogo} alt="Purush" />
            <span className="name">Purushottam Gurjar</span>
          </div>
          <div className="nav-profile">
            <nav className="nav desktop-nav">
              <Link to="/about" className={`nav-content ${nav==="about"? "selected":""}`} onClick={()=>setNav("about")}
              >About</Link>
               <Link to='/AI-Divie' className={`nav-content ${nav==="AI-Divie"? "selected":"none"}`} onClick={()=>setNav("AI-Divie")} >AI-Divie</Link>
              <a href="https://esarthee.vercel.app/"  className={`nav-content ${nav==="esarthee"? "selected":"none"}`} onClick={()=>setNav("esarthee")} >E-Sarthee</a>
              <a href="https://p-tunes.vercel.app/"  className={`nav-content ${nav==="p-tunes"? "selected":"none"}`} onClick={()=>setNav("p-tunes")} >P-Tunes</a>
              <Link to='/contact' className={`nav-content ${nav==="contact"? "selected":"none"}`} onClick={()=>setNav("contact")} >Contact</Link>
              
            </nav>
            <img src={myData.profilePic} alt="Profile" className="profile" />
          </div>
        </header>

        <div className='second-navbar-container'>
            <div  style={{marginTop:"7px"}}>
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4L8 12L16 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
           
            <nav className="nav-second mobile-nav">
                <Link to="/about" className={`second-nav-content ${nav==="about"?"selected":""}`} onClick={()=>setNav("about")}>About</Link>
                <Link to='/about' className={`second-nav-content ${nav==="hello"?"selected":""}`} onClick={()=>window.open("https://ai-divie-purush-gurjar.vercel.app","_self")} >AI-Divie</Link>
                <a href="https://esarthee.purushottam.online/"  className={`second-nav-content ${nav==="esarthee"?"selected":""}`} onClick={()=>setNav("esarthee")} >E-Sarthee</a>              
                <a href="https://p-tunes.vercel.app/"  className={`second-nav-content ${nav==="p-tunes"?"selected":""}`} onClick={()=>setNav("p-tunes")} >P-Tunes</a>
                <Link to='/contact' className={`second-nav-content ${nav==="contact"?"selected":""}`} onClick={()=>setNav("contact")} >Contact</Link>
            </nav>

             <div style={{marginTop:"5px"}}>
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 4L16 12L8 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            

        </div>


        <PopupAI/>

      </div>

      {/* <Portfolio/>  portfolio is shown due to /  path no need to manually mount it*/} 
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
