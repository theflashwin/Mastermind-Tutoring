import React from "react";
import { Link } from "react-router-dom";
import avatar from '../assets/profile.png'
import styles from "../styles/Username.module.css"

export default function Username() {
    
    return(
        <div className="container mx-auto">
            <div className="flex h-screen">
                <div>

                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold">Welcome Back</h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-500">Get ready to jump into the mind of a master</span>
                    </div> 

                    <form className="py-1">
                        <div className="profile flex justify-center py-4">
                            <img src={avatar} alt="avatar"></img>
                        </div>

                        <div className="textbox flex flex-col items-center gap-6">
                            <input type="text" placeholder="Username"/>
                            <button type="submit">Enter</button>
                        </div>

                        <div className="text-center py-4">
                            <span>Not a Member? <Link className="text-purple-500" to="/register">Register Now</Link></span>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )

}