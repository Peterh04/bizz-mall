import "../assets/styles/backgroundVideo.css";
import BgVideo from "../assets/background.mp4";
import { useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;

    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };
  return (
    <div className="video-container">
      <video ref={videoRef} muted playsInline loop className="bg-video">
        <source src={BgVideo} type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>

      <button className="play-btn" onClick={togglePlay}>
        {isPlaying ? "❚❚" : "▶"}
      </button>
    </div>
  );
}
