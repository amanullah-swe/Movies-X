import React from "react";
import ReactPlayer from "react-player/youtube";
import LazyLoadImageComponent from "./LazyLoadImageComponent";
import playButton from "../assets/play-button.png";

// Only loads the YouTube player

// Lazy load the YouTube player
function OfficialVideoCard({ videoKey, name, handleClick, open, id }) {
  console.log(`https://i.ytimg.com/vi/${videoKey}/hqdefault.jpg`);
  const text = "12345677788";
  return (
    <div
      onClick={(e) => {
        handleClick(e, id);
      }}
    >
      <div className="w-48 aspect-video p-0 overflow-hidden rounded-xl relative">
        <div className=" absolute top-[30px] left-[60px]  z-40">
          <img
            src={playButton}
            alt=""
            width={50}
            height={50}
          />
        </div>
        <LazyLoadImageComponent
          url={`https://i.ytimg.com/vi/${videoKey}/hqdefault.jpg`}
          alt="img"
        />
      </div>

      <div>
        {open === id && (
          <div
            onClick={(e) => {
              handleClick(e, text);
            }}
            className="fixed h-screen top-0 left-0 z-50 w-full flex justify-center items-center backdrop-blur-sm"
          >
            <div className="rounded-lg overflow-hidden md:w-[700px] w-[90%] aspect-video">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoKey}`}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OfficialVideoCard;
