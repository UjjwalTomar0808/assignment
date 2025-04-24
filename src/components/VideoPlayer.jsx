import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function VideoPlayer(props) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, []);

  return (
    <>
      <div
        id="video-container"
        className="relative w-full max-w-3xl mx-auto rounded-2xl glow-shadow"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <video
          ref={videoRef}
          poster={props.thumbnail}
          className="w-full h-auto rounded-2xl"
          muted
          playsInline
        >
          <source src={props.videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {showControls && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-blue-500 hover:bg-blue-600 rounded-full p-8 shadow-lg text-white text-4xl">
              {isPlaying ? <FaPause /> : <FaPlay />}
            </div>
          </button>
        )}
      </div>
      <hr className="border-t border-gray-300 w-6xl" />
    </>
  );
}
