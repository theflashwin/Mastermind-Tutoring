import React, {useState} from 'react'
import {FaHome, FaInfoCircle, FaDollarSign, FaSignInAlt, FaRegEdit, FaFlushed, FaBars, FaTimes} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"
import "../css/navbarstyles.css"

function MyNavbar() {

        const [clicked, setClicked] = useState(false);

        function handleClick() {
            setClicked(!clicked)
        }

        return (
            <>
        <nav className='NavbarItems'>
            <h1 className='logo font-serif text-xl'><a href='/'>Mastermind Tutorting<FaFlushed className='icon'/></a></h1>
            <div className='menu-icons' onClick={handleClick}>
                {clicked ? <FaTimes/> : <FaBars/>}
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                <li className='nav-link'><a><FaHome className='iconx'/>Home</a></li>
                <li className='nav-link'><FaInfoCircle className='iconx'/><a>About</a></li>
                <li className='nav-link'><FaDollarSign className='iconx'/><a>Pricing</a></li>
                <li className='nav-link'><FaSignInAlt className='iconx'/><a>Sign In</a></li>
                <li className='nav-link'><FaRegEdit className='iconx'/><a>Sign Up</a></li>
            </ul>
        </nav> 
        </>
        )

}
 
export default MyNavbar