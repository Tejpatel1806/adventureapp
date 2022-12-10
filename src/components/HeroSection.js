import React from 'react'
import './HeroSection.css';
import {Button} from './Button';
import '../App.css';
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/video-2.mp4" autoPlay loop muted/>
      <h1>ADVENTURE AWAITS</h1>
      <p>what are you waiting for?</p>
      <div className='hero-btns'>
        <Button classsName='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
        <Button classsName='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER<i className='far fa-play-circle'/></Button>
      </div>
    </div>
  )
}

export default HeroSection
