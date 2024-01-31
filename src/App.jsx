import {BrowserRouter} from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works,} from "./components";
import './App.css'
import HomePage from "./modules/HomePage/HomePage.jsx";
import SideScroll from "./components/SideScroll/SideScroll.jsx";

function App() {
  return (
    <BrowserRouter>
      <HomePage />
        <SideScroll />
      <div className="main-container">
        <div className="">
          <Navbar />
          <Hero />
        </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
        <div className="">
           <Contact />
           <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
