import "./chanelCard.css";
import React from "react";

const ChanelCard = ({ videos }) => {
  return (
    <div className="div">
      <div className="chanel__img">
        <img src={videos?.snippet?.thumbnails?.default?.url} alt="" />
      </div>
      <h3>{videos?.snippet?.title}</h3>
      {videos?.statistics?.subscriberCount && (
        <h4>
          {parseInt(videos?.statistics?.subscriberCount).toLocaleString()}
          subscriber
        </h4>
      )}
    </div>
  );
};

export default ChanelCard;
