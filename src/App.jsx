import {BrowserRouter} from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Navbar, Works, NavbarScrolled} from "./components";
import './App.css'
import HomePage from "./modules/HomePage/HomePage.jsx";
import SideScroll from "./components/SideScroll/SideScroll.jsx";
import {useEffect, useState} from "react";
import Welcome from "./modules/HomePage/Components/Welcome.jsx";

function App() {
    const [scrollPosition, setScrollPosition] = useState(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', () => setScrollPosition(window.scrollY));

        return () => {
            window.removeEventListener( 'scroll', this)
        };
    }, []);



  return (
    <BrowserRouter>
        <SideScroll />
      <div className="main-container">
          {scrollPosition < 10 ? <Navbar /> : <NavbarScrolled />}
          <HomePage />
          <Welcome />
          <About />
          <Experience />
          <Works />
          {/*<Feedbacks />*/}
           <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
