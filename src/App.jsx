import {BrowserRouter} from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Navbar, Works,} from "./components";
import './App.css'
import HomePage from "./modules/HomePage/HomePage.jsx";
import SideScroll from "./components/SideScroll/SideScroll.jsx";

function App() {
  return (
    <BrowserRouter>
        <SideScroll />
      <div className="main-container">
          <Navbar />
          <HomePage />
          <About />
          <Experience />
          <Works />
          {/*<Feedbacks />*/}
        <div className="">
           <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
