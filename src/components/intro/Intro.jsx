import React from 'react'
import "./intro.scss"

import {init} from 'ityped'
import { useEffect, useRef } from 'react'

const Intro = () => {
    const textRef = useRef();
    useEffect(() => {
       
        init(textRef.current, {
            strings: ["Developer", "Designer", "Freelancer"],
            showCursor: true,
            backDelay: 1500,
            backSpeed: 50,
            
        });
    
        
    }, [])

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.jpg" alt="" />
                </div>
            </div>
            
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>Shoeb Tamboli</h1>
                    <h3>Software {"<"} <span ref={textRef}></span> {"/>"} </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png " alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro
