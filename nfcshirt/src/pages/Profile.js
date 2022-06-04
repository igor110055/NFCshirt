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

    const { activate, deactivate } = useWeb3React();
    const { account } = useWeb3React();

    componentDidMount = () => {
        this.refreshList();
    }

    refreshList = () => {
        axios   //Axios to send and receive HTTP requests
          .get("http://localhost:8000/api/tasks/")
          .then(res => this.setState({ taskList: res.data }))
          .catch(err => console.log(err));
    };

    displayCompleted = status => {
        if (status) {
          return this.setState({ viewCompleted: true });
        }
        return this.setState({ viewCompleted: false });
    };
     
    renderTabList = () => {
        return (
          <div className="my-5 tab-list">
            <span
              onClick={() => this.displayCompleted(true)}
              className={this.state.viewCompleted ? "active" : ""}
            >
              completed
                </span>
            <span
              onClick={() => this.displayCompleted(false)}
              className={this.state.viewCompleted ? "" : "active"}
            >
              Incompleted
                </span>
          </div>
        );
    };

    renderItems = () => {
        const { viewCompleted } = this.state;
        const newItems = this.state.taskList.filter(
          (item) => item.completed === viewCompleted
        );
        return newItems.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span
              className={`todo-title mr-2 ${
                this.state.viewCompleted ? "completed-todo" : ""
              }`}
              title={item.description}
            >
              {item.name}
            </span>
            <span>
              <button
                onClick={() => this.editItem(item)}
                className="btn btn-secondary mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => this.handleDelete(item)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </span>
          </li>
        ));
      };
    
    toggle = () => {
        //add this after modal creation
        this.setState({ modal: !this.state.modal });
    };
    handleSubmit = (item) => {
        this.toggle();
        alert("save" + JSON.stringify(item));
    };
     
      // Submit an item
    handleSubmit = (item) => {
        this.toggle();
        if (item.id) {
          // if old post to edit and submit
          axios
            .put(`http://localhost:8000/api/tasks/${item.id}/`, item)
            .then((res) => this.refreshList());
          return;
        }
        // if new post to submit
        axios
          .post("http://localhost:8000/api/tasks/", item)
          .then((res) => this.refreshList());
    };
     
      // Delete item
    handleDelete = (item) => {
        axios
          .delete(`http://localhost:8000/api/tasks/${item.id}/`)
          .then((res) => this.refreshList());
    };
    handleDelete = (item) => {
        alert("delete" + JSON.stringify(item));
    };
     
      // Create item
    createItem = () => { //'NFT', 'name', 'wallet_address', 'owner'
        const item = { NFT: "", name: "", wallet_address: "", owner: "" };
        this.setState({ activeItem: item, modal: !this.state.modal });
    };
     
      //Edit item
    editItem = (item) => {
        this.setState({ activeItem: item, modal: !this.state.modal });
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
