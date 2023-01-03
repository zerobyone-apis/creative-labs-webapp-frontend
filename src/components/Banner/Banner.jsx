import React from 'react';
import "./Banner.scss";
import { Button } from '@mui/material';
import videoBg from "../../assets/videos/motioncube.mp4";

export const Banner = () => {
    return (
        <>
            <div className="banner_container">
                <video src={videoBg} autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg" />
                <div className='banner_title'>
                    <h1>Your company to the next level</h1>
                </div>

                <div className='banner_footer'>
                    <h4>DESIGN | DEVELOPMENT | GOOD VIBES</h4>
                </div>
                <div className='banner_buttons'>
                    <Button variant="outlined" color="primary">PRODUCTS</Button>
                    <Button variant="outlined" color="primary">PORTFOLIO</Button>
                    <Button variant="outlined" color="primary">ABOUT</Button>
                </div>
            </div>


        </>
    );
}
