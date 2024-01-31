import '../css/Welcome.css'
import {useEffect, useState} from "react";
import {TypeAnimation} from 'react-type-animation';

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
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed once, initially
                   'I am a Full-Stack Web Developer',
                    1000,
                   'I am a ThreeJs Learner',
                    1000,
                   'I am a Designer',
                    1000,
                ]}
                speed={50}
                className={'heading2'}
                repeat={Infinity}
            />
        </div>
    </div>
}

export default Welcome
