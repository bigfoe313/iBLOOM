import React from "react";
import { useAlbum } from "../hooks/useAlbum";
import { useLocation } from "react-router-dom";
import "./Album.css";
import Opensea from "../images/opensea.png";
import { ClockCircleOutlined } from "@ant-design/icons";
import IMANIBloom from "../images/SunflowerAlbumCover.jpg";


// Function to click next song button for Nth track when calling nextsong function
function callFunctionNTimes(func, n) {
  for (let i = 0; i < n; i++) {
    func();
  }
}

// Function to click to next song
function nextsong() {
  setTimeout(() => {
    var nextbutton = document.getElementsByClassName("forback")[1];
    nextbutton.click();
  }, 100); // delay of 0.1 second
}

// Function to scroll to the bottom of the page
function scrollToBottom() {
  setTimeout(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, 100); // delay of 0.1 second
}


const Album = ({setNftAlbum}) => {

  const {state: album} = useLocation();
//  const { albumDetails } = useAlbum(album.contract)

  const albumDetails = [
    {
        "token_address": "0x8a68d4e28515815cd6026416f4b2a4b647796f3e",
        "token_id": "4",
        "amount": "1",
        "contract_type": "ERC721",
        "name": "https://withpaper.com/checkout/74ab3acb-3d80-450f-9072-6d4724672cd3",
        "symbol": "shad",
        "token_uri": "https://gateway.moralisipfs.com/ipfs/QmcfAiN4gVRFDB3uqQKAN1hgpFk3bDG3hVVV2bBnDZNYsD/metadata/3.json",
        "metadata": "{\"image\":\"https://drive.google.com/uc?export=open&id=1ti3HsALKuwM_SXEu1SLsMsvteJYBypb9\",\"name\":\"Shoulda Coulda Woulda\",\"animation_url\":\"https://drive.google.com/uc?export=open&id=1j3756EIfQnDY5sR11Rm7opPLaI58Reho\",\"duration\":\"3:13\",\"artist\":\"IMANI BLOOM\",\"year\":\"2023\"}",
        "synced_at": "2022-03-04T09:06:55.133Z"
    },
    {
        "token_address": "0x8a68d4e28515815cd6026416f4b2a4b647796f3e",
        "token_id": "6",
        "amount": "1",
        "contract_type": "ERC721",
        "name": "https://withpaper.com/checkout/3ae579eb-7a38-46be-bcc2-72f61ece1aa9",
        "symbol": "shad",
        "token_uri": "https://gateway.moralisipfs.com/ipfs/QmcfAiN4gVRFDB3uqQKAN1hgpFk3bDG3hVVV2bBnDZNYsD/metadata/5.json",
        "metadata": "{\"image\":\"https://drive.google.com/uc?export=open&id=1ti3HsALKuwM_SXEu1SLsMsvteJYBypb9\",\"name\":\"Paper Planes\",\"animation_url\":\"https://drive.google.com/uc?export=open&id=1jUK6f2le5BR4XOaPZzt0L1Ej7nSJ9JGV\",\"duration\":\"5:20\",\"artist\":\"IMANI BLOOM\",\"year\":\"2023\"}",
        "synced_at": "2022-03-04T09:06:55.133Z"
    },
    {
        "token_address": "0x8a68d4e28515815cd6026416f4b2a4b647796f3e",
        "token_id": "5",
        "amount": "1",
        "contract_type": "ERC721",
        "name": "https://withpaper.com/checkout/bb90ef06-5e74-4d7c-a88e-1d3776dd4964",
        "symbol": "shad",
        "token_uri": "https://gateway.moralisipfs.com/ipfs/QmcfAiN4gVRFDB3uqQKAN1hgpFk3bDG3hVVV2bBnDZNYsD/metadata/4.json",
        "metadata": "{\"image\":\"https://drive.google.com/uc?export=open&id=1ti3HsALKuwM_SXEu1SLsMsvteJYBypb9\",\"name\":\"Know Better\",\"animation_url\":\"https://drive.google.com/uc?export=open&id=1jAVm8NJEzmLQrz4DN0chiFSC_mTSr4vn\",\"duration\":\"3:54\",\"artist\":\"IMANI BLOOM\",\"year\":\"2023\"}",
        "synced_at": "2022-03-04T09:06:55.133Z"
    },
    {
        "token_address": "0x8a68d4e28515815cd6026416f4b2a4b647796f3e",
        "token_id": "3",
        "amount": "1",
        "contract_type": "ERC721",
        "name": "https://withpaper.com/checkout/21410283-c79c-4a9a-a10a-b7ec8046bfa1",
        "symbol": "shad",
        "token_uri": "https://gateway.moralisipfs.com/ipfs/QmcfAiN4gVRFDB3uqQKAN1hgpFk3bDG3hVVV2bBnDZNYsD/metadata/2.json",
        "metadata": "{\"image\":\"https://drive.google.com/uc?export=open&id=1ti3HsALKuwM_SXEu1SLsMsvteJYBypb9\",\"name\":\"Sunshine\",\"animation_url\":\"https://drive.google.com/uc?export=open&id=1jFnSU7NZqlxccJVuYk215Nzo2JQvjiKu\",\"duration\":\"3:48\",\"artist\":\"IMANI BLOOM\",\"year\":\"2023\"}",
        "synced_at": "2022-03-04T09:06:55.133Z"
    },
    {
        "token_address": "0x8a68d4e28515815cd6026416f4b2a4b647796f3e",
        "token_id": "2",
        "amount": "1",
        "contract_type": "ERC721",
        "name": "https://withpaper.com/checkout/b871d69c-b769-49b0-9bd3-91c9cc3db340",
        "symbol": "shad",
        "token_uri": "https://gateway.moralisipfs.com/ipfs/QmcfAiN4gVRFDB3uqQKAN1hgpFk3bDG3hVVV2bBnDZNYsD/metadata/1.json",
        "metadata": "{\"image\":\"https://drive.google.com/uc?export=open&id=1ti3HsALKuwM_SXEu1SLsMsvteJYBypb9\",\"name\":\"Out of Sight\",\"animation_url\":\"https://drive.google.com/uc?export=open&id=1iwlicaZfGeNP1bfHVM3qLOjUseu2G9nU\",\"duration\":\"3:08\",\"artist\":\"IMANI BLOOM\",\"year\":\"2023\"}",
        "synced_at": "2022-03-04T09:06:55.133Z"
    }
    /*
    {
        "token_address": "0x8a68d4e28515815cd6026416f4b2a4b647796f3e",
        "token_id": "1",
        "amount": "1",
        "contract_type": "ERC721",
        "name": "Shadow",
        "symbol": "shad",
        "token_uri": "https://gateway.moralisipfs.com/ipfs/QmcfAiN4gVRFDB3uqQKAN1hgpFk3bDG3hVVV2bBnDZNYsD/metadata/0.json",
        "metadata": "{\"image\":\"https://drive.google.com/uc?export=open&id=1ti3HsALKuwM_SXEu1SLsMsvteJYBypb9\",\"name\":\"Freedom (Stadium Sound Check - Bonus Video)\",\"animation_url\":\"https://drive.google.com/uc?export=open&id=1bl1o45Kb-gJ-PT-45dJb8mgEkGMZfkqH\",\"duration\":\"0:09\",\"artist\":\"IMANI BLOOM\",\"year\":\"2022\"}",
        "synced_at": "2022-03-04T09:06:55.134Z"
    }
    */
  ];
/*
  const Album = ({ setNftAlbum }) => {
    const { state: albumDetails } = useLocation();
    const { album } = useAlbum(albumDetails.contract);
*/
    return (
      <>
        <div className="albumContent">
          <div className="topBan">
            <img
              src={IMANIBloom}
              alt="albumcover"
              className="albumCover"
            ></img>
            <div className="albumDeets">
              <div hidden>TITLE</div>
              <div className="title">{album.title}</div>
              <div className="artist">
                {albumDetails && JSON.parse(albumDetails[0].metadata).artist}
              </div>
              <div>
                {albumDetails && JSON.parse(albumDetails[0].metadata).year} •{" "}
                {albumDetails && albumDetails.length} Song(s)
              </div>
            </div>
          </div>
          <div className="topBan">
            <div className="playButton" id="play" onClick={() => setNftAlbum(albumDetails)}>
              PLAY
            </div>
            { albumDetails && albumDetails.length == 5 ? (
            <div hidden
              className="openButton"
              onClick={() =>
                window.open(
                  `https://testnets.opensea.io/assets?search[query]=sunflower%20-%20imani%20bloom`
                )
              }
            >
              Buy NFT
              <img src={Opensea} className="openLogo" />
            </div>
            ) : (
            <div
              className="openButton"
              onClick={() =>
                window.open(
                  `https://testnets.opensea.io/assets/mumbai/${album.contract}/1`
                )
              }
            hidden>
              View NFT
              <img src={Opensea} className="openLogo" />
            </div>
            )
            }
          </div>
          <div className="tableHeader">
            <div className="numberHeader">#</div>
            <div className="titleHeader">TITLE</div>
            <div className="numberHeader">
              <ClockCircleOutlined />
            </div>
          </div>
          {albumDetails &&
            albumDetails.map((nft, i) => {
              nft = JSON.parse(nft.metadata);
              return (
                <>
                  <div className="tableContent">
                    <div className="numberHeader">{i + 1}</div>
                    <div
                      className="titleHeader"
                      style={{ color: "rgb(205, 203, 203)" }}
                    >
                      <a style={{color: "white"}} onClick={() => {setNftAlbum(albumDetails && albumDetails); callFunctionNTimes(nextsong, i); scrollToBottom()}}>{nft.name}</a>
                    </div>
                    <div className="songAlbum" ><a href={albumDetails && albumDetails[i].name} target = "_blank"><div>Buy NFT</div></a></div>
                    <div className="numberHeader">{nft.duration}</div>
                  </div>
                </>
              );
            })}
        </div>
      </>
    );
  // };
};

export default Album;
