import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import './App.css'
import Background from "./modules/HomePage/Components/Background.jsx";

function App() {
  return (
    <BrowserRouter>
      <Background />
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
