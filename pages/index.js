import Link from "next/link";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const WeddingInvitation = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <div className="h-screen bg-photo bg-no-repeat bg-cover bg-center">
      {/* Add audio element for background music */}
      {isMusicPlaying && (
        <audio autoPlay loop>
          <source src="/asset/cinta-terkahir.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}

      <div className="flex flex-col justify-center items-center text-center px-sm:py-16">
        <div className="pb-28 pt-24 text-[#9B7651]">
          <h1 className="text-lg sm:text-xl md:text-2xl">THE WEDDING OF</h1>
          <p className="text-5xl sm:text-5xl md:text-6xl mx-2 font-sacramento">
            Ega & Adan
          </p>
          <p className="text-sm font-poppins sm:text-xl md:text-2xl py-4">
            MINGGU, 28 APRIL 2024
          </p>
        </div>
        <div className="fixed bottom-24">
          <div className="flex flex-col text-start py-4 px-2">
            <h2 className="text-white font-poppins">Kepada</h2>
            <p className="text-white font-poppins text-xl font-semibold">
              Dilla Maulana
            </p>
          </div>
          <a href="/home">
            <div
              className="bg-[#9B7651] text-white font-bold py-2 px-16 rounded shadow-[10px_8px_10px_0px_rgba(0,0,0,0.50)] hover:scale-105 transition duration-500"
              onClick={toggleMusic}
            >
              <div className="flex items-center">
                <HiMail className="w-6 h-6" />
                <p className="pl-1 text-white">Buka Undangan</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WeddingInvitation;
