import './App.scss';
import { Routes, Route } from "react-router-dom";
// import Particles from "react-tparticles";
// import { loadFull } from 'tsparticles';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Skills from './containers/skills';
import NavBar from './components/navBar';
// import Footer from './components/footer';

function App() {

 

  return (
    <div className="App">

      {/* navbar */}
      <NavBar />
      {/* particles js */}
   
         {/* <Particles id='particles' init={handleInit}/> */}

      {/* main page content */}
      <div className='App__main-page-content'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
