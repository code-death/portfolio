import '../css/Welcome.css'
import {useEffect, useState} from "react";

const Welcome = () => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const data = [
        'Full-Stack Web Developer',
        'ThreeJs Learner',
        'Designer',
    ];


return <div className={'welcome-background'}>
    <div className={'text-msg'}>
        <h1 className={'heading'}>Hi, Myself Poorvansh</h1>
        <h2 className={'heading2 typewriter'}>I am a Full-Stack Web Developer</h2>
    </div>
</div>
}

export default Welcome
