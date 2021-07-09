import React from 'react';
import '../App.css';
import './MainSection.css'
import { Button } from './Button';
function MainSection(){
    return(
        <div className='main-container'>
            <video autoPlay loop muted>
                <source src='/videos/video-2.mp4' type='video/mp4' />
                </video>
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for?</p>
            <div className='main-btns'>
                <Button
                className="btns"
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                GET STARTED 
                </Button>
                <Button
                className="btns"
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                WATCH TRAILER <i className="far fa-play-circle" />
                </Button>         
            </div>

        </div>
    );
}
export default MainSection;