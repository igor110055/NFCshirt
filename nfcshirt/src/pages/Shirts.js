import React from "react";
import Navbar from "../Navbar";

import shirt from "../pictures/NFCshirt.jpg"

import "./Shirts.css"


function Shirts() {
    return(
        <div id="shirts_page">
            <Navbar />
            <p className="generalFont">
                Hello from the shirt page!<br/>
                Here is one of our shirts, on the back there is an NFC reader
                that allows users to link physical dress to their crypto wallet

            </p>
            <div className="polaroid">
                <img src={shirt} />
            </div>
        </div>
    );
}

export default Shirts;
