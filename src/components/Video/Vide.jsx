import "./vide.css";
import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import ChanelCard from "../ChanelCard/ChanelCard";

const Vide = ({ videos }) => {
  return (
    <div className="videos__youtube">
      <div className="videos__map">
        {videos.map((item) => {
          return (
            <div key={item.id.videoId} className="card">
              {item.id.videoId && <VideoCard videos={item} />}
              {item.id.channelId && <ChanelCard videos={item} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vide;
