import useAudio from "../hooks/useAudio";
import {Slider} from "antd";
import { useIPFS } from "../hooks/useIPFS";
import "./AudioPlayer.css";
import { SoundOutlined, StepBackwardOutlined, StepForwardOutlined, PlayCircleFilled, PauseCircleFilled} from "@ant-design/icons";
import INAMIBloom from "../images/SunflowerAlbumCover.gif";


const Player = ({ url }) => {
  const {resolveLink} = useIPFS();
  const [
    playing,
    duration,
    toggle,
    toNextTrack,
    toPrevTrack,
    trackProgress,
    onSearch,
    onSearchEnd,
    onVolume,
    trackIndex
  ] = useAudio(url);

  
  const minSec = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = Math.floor(secs % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : seconds;

    return `${returnMin}:${returnSec}`;
  };


var audio = 0
const spinner = document.getElementById('spinner');

var intervalID = setInterval(function() {
  if (trackProgress <= 0) {
    document.getElementById('spinner').style.display = 'block';
    listenForVariableChange()  
  }
}, 1000); // 1000 milliseconds = 1 second


var intervalID2 = setInterval(function() {
  if (trackProgress > 0) {
    document.getElementById('spinner').style.display = 'none';
    listenForVariableChange()  
  }
}, 1000); // 1000 milliseconds = 1 second


//var intervalID = setInterval(checkVariableValue, 1000);

function listenForVariableChange() {
    //document.getElementById('spinner').style.display = 'none';
    clearInterval(intervalID);
    clearInterval(intervalID2);
}
/*
listenForVariableChange()

function showSpinner() {
  spinner.style.display = 'block';
}

function hideSpinner() {
  spinner.style.display = 'none';
}
*/

  return (
    <>
    <div className="buttons" style={{width:"300px", justifyContent:"start"}}>
        <img className="cover" src={INAMIBloom} alt="currentCover" hidden/> 
        <img className="cover" src={resolveLink(JSON.parse(url[trackIndex].metadata).image)} alt="currentCover" /> 
        <div>
        <div className="songTitle">{JSON.parse(url[trackIndex].metadata).name}</div>
        <div className="songAlbum">Sunflower</div>
        <div className="songAlbum" hidden>{url[trackIndex].name}</div>
        <br></br>
        </div>
    </div>
    <div>
      <div className="buttons">
        <StepBackwardOutlined className="forback" onClick={toPrevTrack} />
        {playing ? 
            <PauseCircleFilled className="pauseplay" onClick={toggle} /> :
            <PlayCircleFilled className="pauseplay" onClick={toggle} />
        }
        <StepForwardOutlined className="forback" onClick={toNextTrack} />
      </div>
      <div id="spinner" style={{display: "none"}}><p>Song loading...</p></div>
      <div className="buttons">
      {minSec(trackProgress)}
      <Slider id="audio"
        value={trackProgress}
        step={1}
        min={0}
        max={duration ? duration : 0}
        className="progress" 
        tooltipVisible={false}
        onChange={(value) => onSearch(value)}
        onAfterChange={onSearchEnd}
      />
      {duration ? minSec(Math.round(duration)) : "00:00"}
      </div>
      <div className="soundDiv">
            <SoundOutlined />
            <Slider 
              className="volume" 
              defaultValue={100} 
              tooltipVisible={false}
              onChange={(value) => onVolume(value/100)}
            />
      </div>
    </div>
    <div className="songAlbum" ><a href={url[trackIndex].name} target = "_blank"><div className="openButton">Buy NFT</div></a></div>
    </>
  );
};

export default Player;
