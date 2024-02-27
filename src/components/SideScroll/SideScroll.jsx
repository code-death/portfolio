import {useEffect, useState} from "react";
import './SideScroll.css'

const totalSections = 5;

const SideScroll = () => {
    const [activeDot, setActiveDot] = useState(0);
    const [scrollY, setScrollY] = useState(window.scrollY);

    const windowHeight = window.innerHeight;

    useEffect(() => {
        window.addEventListener("scroll", () => setScrollY(window.scrollY))
    }, []);

    useEffect(() => {
        handleCheckActiveDot()
    }, [scrollY]);

    const handleCheckActiveDot = () => {
        let percent = Math.ceil(scrollY / windowHeight);
            setActiveDot(percent)
    }

    const handleCreateDots = () => {
        const arr = new Array(totalSections).fill(0);
        return arr.map((item, index) => {
            return <div key={index} className={`scroll-dot ${index === activeDot ? 'active-dot' : ''}`}></div>
        })
    }


    return <div className={'custom-scroll'}>
        {
            handleCreateDots()
        }
    </div>
}

export default SideScroll
