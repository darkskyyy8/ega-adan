import React, { useState, useRef } from "react";
import Musik from "../components/musik";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <audio ref={audioRef} src="/cinta-terakhir.mp3" />
      <h1 className="text-4xl font-bold mb-4">Welcome to Your Next.js App</h1>
      <Musik isPlaying={isPlaying} onTogglePlay={togglePlay} />
    </div>
  );
};

export default Home;
