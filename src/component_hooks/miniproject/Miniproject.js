import "./styles.css";
import React, { useState } from "react";
import YoutubePlayer from "react-player";

export default function App() {
  return <Video />;
}
//https://www.npmjs.com/package/radio-browser-api

function Video() {
  const [video, setVideo] = useState("aVMkvCTT_yg");

  return (
    <>
      <VideoPlayer youtubeId={video} />
      <div className="interface">
        <div className="layout">
          <div className="buttons">
            <button
              className="ChangeVideo"
              onClick={(e) => setVideo("50Uf_T12OGY")}
            >
              {" "}
              Change Video{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const VideoPlayer = ({ youtubeId }) => {
  const [audio, setAudio] = useState(false);
  return (
    <div className="wrapper">
      <div className="video">
        {/* <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?${playVideo}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          events={x}
        /> */}

        <YoutubePlayer
          playing={true}
          url={"https://www.youtube.com/embed/" + youtubeId}
          width="100%"
          height="100%"
          controls={true}
          volume={11.0}
          muted={audio}
          config={{
            youtube: {
              playerVars: {
                listType: "playlist"
              }
            }
          }}
        />
      </div>
    </div>
  );
};

const playVideo =
  "mute=1&autoplay=1&modestbranding=1&loop=1&rel=0&amp;controls=0&amp;showinfo=0&";
// const playVideo = "https://www.youtube.com/embed/SRWiqjgOyX0
