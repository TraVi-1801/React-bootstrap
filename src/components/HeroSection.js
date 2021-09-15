import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function Herosection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop/>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
            <Button className='btns' buttonStyle = 'btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button className='btns' buttonStyle = 'btn--primary' buttonSize='btn--large'>
                WATCH TRAILER<i className='far fa-play-cricle'></i>
            </Button>
            </div>
        </div>
    )
}

export default Herosection
