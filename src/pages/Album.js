import React from "react";
import { useAlbum } from "../hooks/useAlbum";
import { useLocation } from "react-router-dom";
import "./Album.css";
import Opensea from "../images/opensea.png";
import { ClockCircleOutlined } from "@ant-design/icons";
import IMANIBloom from "../images/SunflowerAlbumCover.jpg";

const Album = ({setNftAlbum}) => {

  const {state: album} = useLocation();
//  const { albumDetails } = useAlbum(album.contract)

  const albumDetails = [
    {
        "token_address": "0x8a68d4e28515815cd6026416f4b2a4b647796f3e",
        "token_id": "4",
        "amount": "1",
        "contract_type": "ERC721",
        "name": "Shadow",
        "symbol": "shad",
        "token_uri": "https://gateway.moralisipfs.com/ipfs/QmcfAiN4gVRFDB3uqQKAN1hgpFk3bDG3hVVV2bBnDZNYsD/metadata/3.json",
        "metadata": "{\"image\":\"https://drive.google.com/uc?export=open&id=1ti3HsALKuwM_SXEu1SLsMsvteJYBypb9\",\"name\":\"ShouldaCouldaWoulda\",\"animation_url\":\"https://drive.google.com/uc?export=open&id=10rM9CXYEEMS_f9k_U_gTJ574Xyobf98h\",\"duration\":\"0:09\",\"artist\":\"I M A N I\",\"year\":\"2023\"}",
        "synced_at": "2022-03-04T09:06:55.133Z"
    },
    {
        "token_address": "0x8a68d4e28515815cd6026416f4b2a4b647796f3e",
        "token_id": "6",
        "amount": "1",
        "contract_type": "ERC721",
        "name": "Shadow",
        "symbol": "shad",
        "token_uri": "https://gateway.moralisipfs.com/ipfs/QmcfAiN4gVRFDB3uqQKAN1hgpFk3bDG3hVVV2bBnDZNYsD/metadata/5.json",
        "metadata": "{\"image\":\"https://drive.google.com/uc?export=open&id=1ti3HsALKuwM_SXEu1SLsMsvteJYBypb9\",\"name\":\"Paper Planes\",\"animation_url\":\"https://drive.google.com/uc?export=open&id=10neDD-VGEEQixPS35Lh-nOSmea2Rktvr\",\"duration\":\"0:09\",\"artist\":\"I M A N I\",\"year\":\"2022\"}",
        "synced_at": "2022-03-04T09:06:55.133Z"
    },
    {
        "token_address": "0x8a68d4e28515815cd6026416f4b2a4b647796f3e",
        "token_id": "5",
        "amount": "1",
        "contract_type": "ERC721",
        "name": "Shadow",
        "symbol": "shad",
        "token_uri": "https://gateway.moralisipfs.com/ipfs/QmcfAiN4gVRFDB3uqQKAN1hgpFk3bDG3hVVV2bBnDZNYsD/metadata/4.json",
        "metadata": "{\"image\":\"https://drive.google.com/uc?export=open&id=1ti3HsALKuwM_SXEu1SLsMsvteJYBypb9\",\"name\":\"Know Better\",\"animation_url\":\"https://drive.google.com/uc?export=open&id=10o9mPEnLFml_ohkcfuGlO5BUn6THyW-Y\",\"duration\":\"0:08\",\"artist\":\"I M A N I\",\"year\":\"2022\"}",
        "synced_at": "2022-03-04T09:06:55.133Z"
    },
    {
        "token_address": "0x8a68d4e28515815cd6026416f4b2a4b647796f3e",
        "token_id": "3",
        "amount": "1",
        "contract_type": "ERC721",
        "name": "Shadow",
        "symbol": "shad",
        "token_uri": "https://gateway.moralisipfs.com/ipfs/QmcfAiN4gVRFDB3uqQKAN1hgpFk3bDG3hVVV2bBnDZNYsD/metadata/2.json",
        "metadata": "{\"image\":\"https://drive.google.com/uc?export=open&id=1ti3HsALKuwM_SXEu1SLsMsvteJYBypb9\",\"name\":\"Sunshine\",\"animation_url\":\"https://drive.google.com/uc?export=open&id=10uDtscWR7iKyonK_spVSfjU_18WE48C2\",\"duration\":\"0:12\",\"artist\":\"I M A N I\",\"year\":\"2022\"}",
        "synced_at": "2022-03-04T09:06:55.133Z"
    },
    {
        "token_address": "0x8a68d4e28515815cd6026416f4b2a4b647796f3e",
        "token_id": "2",
        "amount": "1",
        "contract_type": "ERC721",
        "name": "Shadow",
        "symbol": "shad",
        "token_uri": "https://gateway.moralisipfs.com/ipfs/QmcfAiN4gVRFDB3uqQKAN1hgpFk3bDG3hVVV2bBnDZNYsD/metadata/1.json",
        "metadata": "{\"image\":\"https://drive.google.com/uc?export=open&id=1ti3HsALKuwM_SXEu1SLsMsvteJYBypb9\",\"name\":\"Out of Sight\",\"animation_url\":\"https://drive.google.com/uc?export=open&id=10dzYy3MdKRtvVBwNZy-nMhcBmv-Jjs-W\",\"duration\":\"0:09\",\"artist\":\"I M A N I\",\"year\":\"2022\"}",
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
        "metadata": "{\"image\":\"https://drive.google.com/uc?export=open&id=1ti3HsALKuwM_SXEu1SLsMsvteJYBypb9\",\"name\":\"Freedom (Stadium Sound Check - Bonus Video)\",\"animation_url\":\"https://drive.google.com/uc?export=open&id=1bl1o45Kb-gJ-PT-45dJb8mgEkGMZfkqH\",\"duration\":\"0:09\",\"artist\":\"I M A N I\",\"year\":\"2022\"}",
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
            <div className="playButton" onClick={() => setNftAlbum(albumDetails)}>
              PLAY
            </div>
            { albumDetails && albumDetails.length == 5 ? (
            <div
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
                      {nft.name}
                    </div>
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
