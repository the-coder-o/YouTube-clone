import "./videoCard.css";
import React from "react";
import moment from "moment";

const VideoCard = ({ videos }) => {
  return (
    <>
      <div className="video__father-two">
        <div className="video__img">
          <img
            src={videos.snippet.thumbnails.high.url}
            alt={videos?.snippet?.title}
          />
        </div>
        <div className="title__video">
          <div className="img">
            <img src={videos.snippet.thumbnails.medium.url} alt="" />
          </div>
          <div className="title__chanel">
            <p className="title__1">{videos.snippet.description}</p>
            <p className="title__2">{videos.snippet.channelTitle}</p>
            <p className="title__3">
              {moment(videos?.snippet?.publishedAt).fromNow()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
