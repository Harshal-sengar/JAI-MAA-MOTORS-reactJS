// PipPlayer.js

import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import "./Colors.css";

const PipPlayer = ({ url }) => {
  const playerRef = useRef(null);
  const [pipActive, setPipActive] = useState(false);

  useEffect(() => {
    const videoElement = playerRef.current.getInternalPlayer();
    if (videoElement) {
      // Start in PiP mode by default
      videoElement.requestPictureInPicture().catch(error => console.error(error));

      // Cleanup function to exit PiP mode when the component unmounts
      return () => {
        if (document.pictureInPictureElement) {
          document.exitPictureInPicture().catch(error => console.error(error));
        }
      };
    }
  }, []);

  const handleTogglePip = () => {
    const videoElement = playerRef.current.getInternalPlayer();
    if (videoElement) {
      if (document.pictureInPictureElement) {
        document.exitPictureInPicture().catch(error => console.error(error));
      } else {
        videoElement.requestPictureInPicture().catch(error => console.error(error));
      }
    }
  };

  const handlePipChange = () => {
    setPipActive(document.pictureInPictureElement === playerRef.current.getInternalPlayer());
  };

  return (
    <div className='pipplayer' >
      <ReactPlayer
        ref={playerRef}
        url="https://apigoswirl.com/videos/4759.mp4"
        controls
        style={{borderRadius:"15px"}}
        width="250px"
        height="120px"
        autoPlay
        playing // Set to true to start playing
        onPlay={handlePipChange}
        onPause={handlePipChange}
        onSeek={handlePipChange}
        onEnded={handlePipChange}
        onEnterFullscreen={handlePipChange}
        onLeaveFullscreen={handlePipChange}
      />
      {ReactPlayer.canEnablePiP && (
        <button onClick={handleTogglePip}>
          {pipActive ? 'Exit PiP' : 'Enter PiP'}
        </button>
      )}
    </div>
  );
};

export default PipPlayer;
