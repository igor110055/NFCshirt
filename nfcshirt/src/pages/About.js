import React from "react";
import "./About.css"

import Pic1 from "../pictures/Picture1.png"
import Navbar from "../Navbar";

function About() {
    return(
        <div>
            <Navbar />
            <p id="about_header">NFC shirts is the brain child of Skye, Karrim, and Naeem</p>

            <p id="about" className="generalFont">
                NFC shirts is a for profit organization looking to build a repetoire of making 
                T-shirts into NFTs. This can then be integrated into building street credit to 
                those who provide valueable goods and services <br/><br/>

                the idea is to sell shirts that connect to anyone's crypto wallet and then wrap
                a coin around it to allow people to allocate street credit to those who go above
                and beyond to provide good fun times. 
            </p>
            <br/>
            <p className="generalFont">Meet the founders:</p>
            <div className="row">
                <div className="column">
                    <div className="polaroid">
                        <p className="about_title">Skye</p>
                        <img src={Pic1} />
                        <p className="about_font">A genius Berkly student that initiated the idea</p>
                    </div>
                </div>
                <div className="column">
                    <div className="polaroid">
                        <p className="about_title">Karrim</p>
                        <img src={Pic1} />
                        <p className="about_font">the advisor to the project and a visionary</p>
                    </div>
                </div>
                <div className="column">
                    <div className="polaroid">
                        <p className="about_title">Naeem</p>
                        <img src={Pic1} />
                        <p className="about_font">San Jose State graduate and web developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
