import React from "react";
import "./Home.css"

function Home() {
    return(
        <div>
            <p id="home_header">Welcome to NFCshirt!</p>
            <p className="generalFont"> 
                How do we work?
                <br/><br/>
                Our product works by embedding an NFC tag into 
                your clothing so that it can be linked to memorable 
                times as well as giving street credit to people
                that make those times memorable!
            </p>
        </div>
    );
}

export default Home;
