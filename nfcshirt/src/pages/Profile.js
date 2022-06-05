import React from "react";
import Navbar from "../Navbar";
import "./Profile.css"

import genShirt from '../pictures/NFCshirt.jpg'

import axios from 'axios'; 

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

    state = {
      details: [],
      NFT: "",
      Wallet_address: "",
      owner: "",
      name: ""
    };
    const { activate, deactivate } = useWeb3React();
    const { account } = useWeb3React();

    componentDidMount = () => {
  
      let data ;

      axios.get('http://localhost:8000/wel/')
      .then(res => {
          data = res.data;
          this.setState({
              details : data    
          });
      })
      .catch(err => {})
  }

  handleInput = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios
        .post("http://localhost:8000/wel/", {
            NFT: this.state.NFT,
            owner: this.state.owner,
            wallet_address: this.state.Wallet_address,
            name: this.state.name
        })
        .then((res) => {
            this.setState({
              NFT: "",
              owner: "",
              wallet_address: "",
              name: ""
            });
        })
        .catch((err) => {});
  };

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

            <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"
                                  id="basic-addon1">
                                {" "}
                                Author{" "}
                            </span>
                        </div>
                        <input type="text" className="form-control" 
                               placeholder="Name of the Poet/Author"
                               aria-label="Username"
                               aria-describedby="basic-addon1"
                               value={this.state.user} name="user"
                               onChange={this.handleInput} />
                    </div>
  
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                               Your Quote 
                            </span>
                        </div>
                        <textarea className="form-control " 
                                  aria-label="With textarea"
                                  placeholder="Tell us what you think of ....." 
                                  value={this.state.quote} name="quote" 
                                  onChange={this.handleInput}>
                        </textarea>
                    </div>
  
                    <button type="submit" className="btn btn-primary mb-5">
                        Submit
                    </button>
                </form>
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
