import React from "react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";

const Musik = ({ isPlaying, onTogglePlay }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        className="bg-[#9B7651] text-white font-bold py-1 px-2 rounded"
        onClick={onTogglePlay}
      >
        {isPlaying ? (
          <MdMusicNote className="hover:text-gray-400 transition duration-500 text-xl" />
        ) : (
          <MdMusicOff className="hover:text-gray-400 transition duration-500 text-xl" />
        )}
      </button>
    </div>
  );
};

export default Musik;
