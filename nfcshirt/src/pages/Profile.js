import React from "react";
import Navbar from "../Navbar";

import genShirt from '../pictures/NFCshirt.jpg'

import { Web3ReactProvider } from '@web3-react/core'

import { Web3Provider } from "@ethersproject/providers";



function Profile() {

    getLibrary = (provider) => {

        return new Web3Provider(provider);
    
    }
    
    const generalShirts = () => {
        var value = []
        for(var index=0;index<3;index++)
        {
            value[index] = <div className="polaroid"><img src={genShirt} /></div>
        }
        return value

    }

    var wallet = "0x1234567890ABCDEF"

    return(
        <div>
            <Navbar />
            <p className="generalFont">Welcome to your profile of NFC shirts</p>
            <p className="generalFont">
                Wallet ID <br/><br/>
                <a href="https://google.com">wallet ID: {wallet.substring(0,4) + "..." + wallet.substring(wallet.length-3,wallet.length)}</a>
                <br/>
                Shirts:
            </p>
            {generalShirts()}
        </div>
    );
}

export default Profile;
