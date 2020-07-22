import React from "react";
import "../styles.css";
import "../images/AlbumArtRFN.jpg";

const Player = () => {
  return (
    <div class="player-container">
      <div class="album-art">
        <img src={require("../images/AlbumArtRFN.jpg")} alt="album art" />
      </div>
    </div>
  );
};

export default Player;
