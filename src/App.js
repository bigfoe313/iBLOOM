import React from 'react';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from './pages/Album';
import './App.css';
import { Link } from "react-router-dom";
import Player from "./components/AudioPlayer";
import { Layout } from "antd";
import Spotify from "./images/Spotify.png";
import { SearchOutlined, DownCircleOutlined } from "@ant-design/icons";
import iBLOOMLogo from "./images/Power_Button.png";
import { Magic } from "magic-sdk";
import { ConnectExtension } from "@magic-ext/connect";
import Web3 from "web3";
/*
const magic = new Magic('pk_live_E6F73D5862FD942C', {
  extensions: [new ConnectExtension()],
  network: "kovan", // or "ropsten" or "kovan"
});
*/
const customNodeOptions = {
  rpcUrl: 'https://rpc-mumbai.maticvigil.com//',
  chainId: 8001,
}

const magic = new Magic('pk_live_E6F73D5862FD942C', {
  extensions: [new ConnectExtension()],
  network: customNodeOptions
});

const web3 = new Web3(magic.rpcProvider);
/*
  const login = async () => {
    web3.eth
      .getAccounts()
      .then((accounts) => {
        setAccount(accounts?.[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
*/
const showWallet = () => {
  window.web3 = new Web3(magic.rpcProvider);
  window.web3.eth.getAccounts().then(accounts => console.log(accounts[0]));
  magic.connect.showWallet().catch((e) => {
    console.log(e);
  });
};

const { Content, Sider, Footer } = Layout;

const App = () => {

  const [nftAlbum, setNftAlbum] = useState();
  return (
    <>
      <Layout>
        <Layout>
          <div className="sideBar" >
            <img src={iBLOOMLogo} alt="Logo" className="logo" hidden></img>
            <p hidden> iBLOOMRecords </p>
            <div className="searchBar" hidden>
              <span> Search </span>
              <SearchOutlined style={{ fontSize: "30px" }} />
            </div>
            <div style={{ textAlign:"justify", textAlignLast:"justify", textJustify:"interWord", width:"100%" }}>
                <Link to="/">
                <p className="walletlink" style={{ color: "#1db6b9", fontSize: "22px",   fontWeight: "600" }}> Home </p>
                </Link>

                <a hidden href="#" onClick={showWallet} className="walletlink" style={{ color: "#1db6b9", fontSize: "22px",   fontWeight: "600" }}>
                  Wallet
                </a>

                <a href="https://withpaper.com/wallet" className="walletlink" style={{ color: "#1db6b9", fontSize: "22px",   fontWeight: "600" }}>
                  NFT-Wallet
                </a>

            </div>
            <div className="recentPlayed">
              <p className="recentTitle">iBLOOM Records is an artist owned record label where all profits from music sales go to the artist. Fans have the opportunity to share in the success of our artists through the collection of music NFTs. We are on the forefront of the decentralized music industry. Click on the album cover to listen to and purchase NFTs. Purchases will be saved in your personalized NFT-Wallet. <br></br><a href="mailto:info@imanibloom.com" target = "_blank">Contact us.</a></p>
              <div className="install" hidden>
                <span>  </span>
                <DownCircleOutlined style={{ fontSize: "30px" }} />
              </div>
            </div>
          </div>
          <Content className="contentWindow">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/album" element={<Album setNftAlbum={setNftAlbum}/>} />
          </Routes>
          </Content>
        </Layout>
        <Footer className="footer">
          {nftAlbum &&
          <Player
            url={nftAlbum}
          />
          }
        </Footer>
      </Layout>
    </>
  );
}


export default App;
