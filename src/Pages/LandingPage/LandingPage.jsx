import React from 'react';
import { Link } from 'react-router-dom';

//styling
import './LandingPage.css';
import afhlogo from "../../assets/afhlogo.svg";


function LandingPage() {
    return(
        <div className='container-fluid'>
            <div className='landing'>
                <div className='logo'>
                <img src={afhlogo} alt="logo" />
                </div>
                <div className="body">
            <h1 className="m-5 marquee">AFH Website Launching Soon🛍️🌺😌💕</h1>
            <p className="m-5">For now...Shop on WhatsApp </p>
        </div>

        <div className="shop d-flex align-items-center justify-content-center">
            <p className="p-3">Shop <span>
                    <a 
                        href="https://wa.me/2349016153423?text=Hello%20AFH%2C%20I%20am%20interested%20in%20shopping" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        WhatsApp
                    </a>
                </span></p>
        </div>
            </div>
        </div>
    )
}

export default LandingPage
