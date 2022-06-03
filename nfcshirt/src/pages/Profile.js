import React from "react";
import Navbar from "../Navbar";
import "./Profile.css"

import genShirt from '../pictures/NFCshirt.jpg'

import Web3 from 'web3'

import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";

import { Web3ReactProvider, useWeb3React } from '@web3-react/core'

const CoinbaseWallet = new WalletLinkConnector({
 url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
 appName: "nfcshirt",
 supportedChainIds: [1, 3, 4, 5, 42],
 
});

const WalletConnect = new WalletConnectConnector({
 rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
 bridge: "https://bridge.walletconnect.org",
 qrcode: true,
});

const Injected = new InjectedConnector({
 supportedChainIds: [1, 3, 4, 5, 42]
});

function Profile() {

    const { activate, deactivate } = useWeb3React();
    const { active, chainId, account } = useWeb3React();

    const generalShirts = () => {
        var value = []
        for(var index=0;index<3;index++)
        {
            value[index] = <div className="polaroid"><img className="profile_shirt" src={genShirt} /></div>
        }
        return value

    }

    var wallet = String(account)

    const CoinbaseWalletDidMount = () => {
        
        activate(CoinbaseWallet);
    }

    return(
        <div id="profile_shirts">
            <Navbar />
            <p className="generalFont">Welcome to your profile of NFC shirts</p>
            <button className="profile_wallet_button" onClick={CoinbaseWalletDidMount}>Coinbase Wallet</button>
            <button className="profile_wallet_button" onClick={() => { activate(WalletConnect) }}>Wallet Connect</button>
            <button className="profile_wallet_button" onClick={() => { activate(Injected) }}>Metamask</button>
            <button className="profile_wallet_button" onClick={deactivate}>Disconnect</button>

            <p className="generalFont">
                <br/>

                Wallet IDs <br/><br/>
                <p className="profile_wallet" href="https://google.com">wallet ID: {wallet.substring(0,4) + "..." + wallet.substring(wallet.length-3,wallet.length)}</p>
                <p className="profile_wallet_hide">{wallet}</p>
                <br/>
                Your shirts:
            </p>
            {generalShirts()}
        </div>
    );
}

export default Profile;
