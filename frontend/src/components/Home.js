import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {Divider} from 'antd'
import { FaArrowRight } from 'react-icons/fa'; 
import "../css/homestyles.css"
import Navbar from './MyNavbar';

function Home() {
    return (<>
        
        <div className='home'>
            <h1 className='padder'>SAT Tutorting by</h1>
            <TypeAnimation
                sequence={[
                    "Students",
                    3000,
                    "Perfect Scorers",
                    3000,
                    "Mentors",
                    4000,
                ]}
                repeat={Infinity}
                wrapper='h2'
                cursor = {true}
                style={{ fontSize: '8vw' }}
            />

            <a className='btn'><span>Get Started</span></a>

            {/* <img className='splash-img' src='mainimg.png'></img> */}
        </div>

        {/* <div className='about'>

            <h1>Hello</h1>

        </div> */}

    </>);
}

export default Home;