import React from 'react'
import "./topbar.scss"
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';

const Topbar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>S. T.</a>
                    <div className="itemContainer">
                        <PersonIcon className='icon'/>
                        <span>+49 151 45354637</span>
                    </div>
                    <div className="itemContainer">
                        <MailIcon className='icon'/>
                        <span>shoebtamboli98@gmail.com</span>
                    </div>
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
