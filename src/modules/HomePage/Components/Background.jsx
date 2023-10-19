import '../css/Background.css'
import {useState} from "react";

const Background = () => {
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    console.log(scrollY/windowHeight*100)

    window.addEventListener('resize', () => setWindowHeight(window.innerHeight));
    window.addEventListener('scroll', () => setScrollY(window.scrollY));

    return (
        <div className='blob-background'>
            <div className="blob-c">
                <div className="shape-blob one"></div>
                <div className="shape-blob two"></div>
                <div className="shape-blob three"></div>
                <div className="shape-blob five"></div>
                <div className="shape-blob six"></div>
            </div>
        </div>
    )
}

export default Background
