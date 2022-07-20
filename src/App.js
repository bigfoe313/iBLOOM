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

const { Content, Sider, Footer } = Layout;

const App = () => {

  const [nftAlbum, setNftAlbum] = useState();
  return (
    <>
      <Layout>
        <Layout>
          <div className="sideBar">
            <img src={iBLOOMLogo} alt="Logo" className="logo" hidden></img>
            <p hidden> iBLOOMRecords </p>
            <div className="searchBar" hidden>
              <span> Search </span>
              <SearchOutlined style={{ fontSize: "30px" }} />
            </div>
            <Link to="/">
            <p style={{ color: "#1db6b9", fontSize: "22px",   fontWeight: "600" }}> Home </p>
            </Link>
            <p hidden> iBLOOMRecords </p>
            <div className="recentPlayed">
              <p className="recentTitle">iBLOOM Records is an artist owned record label where all profits from music sales go to the artist. Fans have the opportunity to share in the success of our artists through the collection of music NFTs. We are on the forefront of the decentralized music industry. <a href="mailto:imani.iamfaith@gmail.com" target = "_blank">Join us.</a></p>
              <div className="install" hidden>
                <span>  </span>
                <DownCircleOutlined style={{ fontSize: "30px" }} />
              </div>
            </div>
          </div>
          <Content className="contentWindow">
          <Routes>
            <Route path="/" element={<Home />} />
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
