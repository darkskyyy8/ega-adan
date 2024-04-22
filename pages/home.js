import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import Countdown from "../components/countdown";
import Footer from "../components/footer";
import Slide from "../components/slide";
import { GoHomeFill } from "react-icons/go";
import { IoIosMusicalNotes, IoMdPhotos } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import { FaCircleDown } from "react-icons/fa6";
import Musik from "../components/musik";

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
      });
    }
  };

  const handleScrollToTop = () => {
    scrollTo("beranda");
  };

  const handleScrollToGallery = () => {
    scrollTo("galeri");
  };

  const handleScrollToAttendance = () => {
    scrollTo("kehadiran");
  };
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
    <>
      {/*home*/}
      <div id="beranda" className="container mx-auto min-h-screen">
        <div className="relative">
          <img
            src="/asset/p01.jpg"
            alt="image"
            className="w-full h-[750px] bg-center"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center p-4 text-[#9B7651]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-sacramento mb-2 ">
              Ega & Adan
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-poppins font-normal">
              28 April 2024
            </h2>
          </div>
        </div>
        <div className="text-center my-10 px-8">
          <h3 className="text-base sm:text-lg md:text-xl font-poppins">
            Atas Rahmat Tuhan Yang Maha Esa, kami bermaksud mengundang Anda di
            acara Kami. Merupakan suatu kehormatan dan kebahagiaan bagi kami
            sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir dan
            memberikan doa restu pada :
          </h3>
        </div>
      </div>
      {/*end home*/}
      {/*gallery pengantin*/}
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-col items-center">
          <Image
            src="/asset/mw01.jpg"
            alt="Gambar"
            width={225}
            height={225} // Adjusted height for better responsiveness
            className="rounded-[50px] shadow-[10px_8px_6px_0px_rgba(0,0,0,0.25)] hover:scale-105 transition duration-500 bg-center"
          />
          <h6 className="pt-6 font-bold text-lg font-sacramento text-[#E0AA3E]">
            Mega Rahmawati
          </h6>
          <p className="font-bold text-base font-sacramento text-[#020202ab]">
            (Ega)
          </p>
          <div className="text-sm pb-2 font-poppins font-normal">
            <p> Putri Bapak Iim Abdurohman</p>
            <p> & Ibu Solihat</p>
            <p> Kampung Sagaranten Rt 01 Rw 04</p>
            <p> Ds. Sukasono Kec. Sukawening</p>
          </div>
          <a href="https://www.instagram.com/merahmu_/">
            <div className="shadow-[10px_8px_10px_0px_rgba(0,0,0,0.25)] flex items-center bg-[#9B7651] text-white font-bold py-1 px-4 rounded-lg hover:scale-105 transition duration-200">
              <p className="flex items-center text-base">
                <AiFillInstagram />
                <span className="pl-[2px]">merahmu_</span>
              </p>
            </div>
          </a>
        </div>
        <div className="flex flex-col items-center pt-16 pb-10">
          <Image
            src="/asset/mp01.jpg"
            alt="Gambar"
            width={225}
            height={225} // Adjusted height for better responsiveness
            className="rounded-[50px] shadow-[10px_8px_6px_0px_rgba(0,0,0,0.25)] hover:scale-105 transition duration-500 bg-center"
          />
          <h6 className="pt-6 font-bold text-lg font-sacramento text-[#E0AA3E]">
            Muhammad Wahdan Abdulloh
          </h6>
          <p className="font-bold text-base font-sacramento text-[#020202ab]">
            (Adan)
          </p>
          <div className="text-sm pb-2 font-poppins font-normal">
            <p> Putra Bapak Jajang Nurodin </p>
            <p> & Ibu Ade Supriyatin </p>
            <p> Kampung Tagog Rt 01 Rw 01 </p>
            <p> Ds. Sukaluyu Kec. Sukawening</p>
          </div>
          <a href="https://www.instagram.com/adan.magrib_/">
            <div className="shadow-[10px_8px_10px_0px_rgba(0,0,0,0.25)] flex items-center bg-[#9B7651]  text-white font-bold py-1 px-4 rounded-lg hover:scale-105 transition duration-200 ">
              <p className="flex items-center text-base">
                <AiFillInstagram />
                <span className="pl-[2px]">adan.magrib_</span>
              </p>
            </div>
          </a>
        </div>
      </div>
      {/*gallery pengantin*/}
      {/*save the date*/}
      <div className="bg-photo bg-cover bg-center bg-no-repeat min-h-screen">
        <div className="flex justify-center items-center flex-col text-center font-poppins px-8 py-8 sm:py-16 text-white">
          <div>
            <h1 className="font-sacramento text-[#E0AA3E] text-3xl pb-6">
              Save The Date
            </h1>
            <p>
              Tuhan Kami, Tuhan yang kami kasihi serta kami sembah. Tuhan
              pemilik kehidupan serta cinta kasih, kami memohon berkat kepada-Mu
              untuk pengantin wanita dan pengantin pria pada kehidupan bersama
              mereka sebagai sepasang kekasih yang di madu cinta.
            </p>
            <Countdown />
          </div>
          <div className="py-4">
            <h1 className="font-sacramento text-[#E0AA3E] text-2xl">
              Resepsi Pernikahan
            </h1>
            <ol className="font-poppins"> Minggu, 28 APRIL 2024 </ol>
            <ol className="font-poppins"> Pukul 10:00 WIB - 14:00 WIB </ol>
            <div className="py-2">
              <a href="https://www.google.com/maps/place/7%C2%B007'44.6%22S+108%C2%B000'08.2%22E/@-7.129045,107.9996987,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-7.129045!4d108.0022736?entry=ttu">
                <button className="bg-gray-300 hover:bg-[#2AB318] text-white font-poppins py-2 px-4 rounded-lg items-center justify-center hover:scale-105 transition duration-500">
                  <div className="flex justify-center items-center">
                    <IoLocationSharp />
                    <p className="text-sm font-poppins">Lokasi Acara Kami</p>
                  </div>
                </button>
              </a>
            </div>
          </div>
          <div>
            <h1 className="font-sacramento text-[#E0AA3E] text-2xl">
              {" "}
              Akad Pernikahan
            </h1>
            <ol className="font-poppins"> Minggu, 28 APRIL 2024 </ol>
            <ol className="font-poppins"> Pukul 08:00 WIB - 10:00 WIB </ol>
            <div className="py-2">
              <a href="https://www.google.com/maps/place/7%C2%B007'44.6%22S+108%C2%B000'08.2%22E/@-7.129045,107.9996987,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-7.129045!4d108.0022736?entry=ttu">
                <button className="bg-gray-300 hover:bg-[#2AB318] text-white font-poppins py-2 px-4 rounded-lg items-center justify-center hover:scale-105 transition duration-500">
                  <div className="flex justify-center items-center">
                    <IoLocationSharp />
                    <p className="text-sm font-poppins">Lokasi Akad Kami</p>
                  </div>
                </button>
              </a>
            </div>
          </div>
          <div>
            <h1>
              Besar harapan kami jika Bapak/Ibu/Saudara/i berkenan hadir pada
              acara ini. Atas perhatiannya Terimakasih
            </h1>
          </div>
        </div>
      </div>
      {/*end save the date*/}
      {/*journey*/}
      <div className="flex flex-col justify-center text-center items-center p-10">
        <h1 className="font-sacramento text-[#E0AA3E] text-xl">Sebuah Kisah</h1>
        <h2 className="font-sacramento text-3xl ">Perjalanan Kami</h2>
        <div className="shadow-[10px_8px_10px_0px_rgba(0,0,0,0.25)] rounded-md w-72 md:w-80 bg-white p-4 h-full hover:scale-105 transform transition-transform duration-500 mt-6">
          <div className="flex justify-center">
            <Image
              src="/asset/pr1.jpg"
              width={200}
              height={50}
              alt="ios"
              className="rounded"
            />
          </div>
          <h2 className="text-xl font-inter font-semibold py-2">Pertemuan</h2>
          <p className=" font-poppins font-normal text-sm text-center">
            Tidak ada yang kebetulan di dunia ini,semua sudah tersusun rapih
            oleh sang Maha Kuasa. Kita tidak bisa memilih kepada siapa kita akan
            jatuh cinta dan tidak ada yang pernah menyangka bahwa pertemuan itu
            membawa kami pada suatu ikatan cinta yang suci hari ini
          </p>
        </div>
        <div className="shadow-[10px_8px_10px_0px_rgba(0,0,0,0.25)] rounded-md w-72 md:w-80 bg-white p-4 h-full hover:scale-105 transform transition-transform duration-500 my-6">
          <div className="flex justify-center">
            <Image
              src="/asset/pr2.jpg"
              width={200}
              height={50}
              alt="ios"
              className="rounded"
            />
          </div>
          <h2 className="text-xl font-inter font-semibold py-2">Pendekatan</h2>
          <p className=" font-poppins font-normal text-sm text-center">
            Katanya cinta dapat tumbuh dengan kebersamaan. Seiring berjalanya
            waktu kami semakin dekat, berada di lingkungan dan hobi yang sama
            membuat kami cukup sering bertemu.
          </p>
        </div>
        <div className="shadow-[10px_8px_10px_0px_rgba(0,0,0,0.25)] rounded-md w-72 md:w-80 bg-white p-4 h-full hover:scale-105 transform transition-transform duration-500">
          <div className="flex justify-center">
            <Image
              src="/asset/pr5.jpg"
              width={200}
              height={50}
              alt="ios"
              className="rounded"
            />
          </div>
          <h2 className="text-xl font-inter font-semibold py-2">Lamaran</h2>
          <p className=" font-normal font-poppins text-sm text-center">
            Kehendaknya menuntun kami pada sebuah pertemuan yang tak pernah
            disangka hingga akhirnya membawa kami pada ikatan suci yang
            dicintai-Nya. Kami melangsungkan acara lamaran di bulan Januari lalu
          </p>
        </div>
        <div className="shadow-[10px_8px_10px_0px_rgba(0,0,0,0.25)] rounded-md w-72 md:w-80 bg-white p-4 h-full hover:scale-105 transform transition-transform duration-500 mt-6">
          <div className="flex justify-center">
            <Image
              src="/asset/pr4.jpg"
              width={200}
              height={50}
              alt="ios"
              className="rounded"
            />
          </div>
          <h2 className="text-xl font-inter font-semibold py-2">Pernikahan</h2>
          <p className="font-normal font-poppins text-sm text-center">
            Kami percaya, bukan karena bertemu lalu berjodoh. Tapi karna
            berjodohlah maka kami dipertemukan. Kami memutuskan untuk
            mengikrarkan janji suci pernikahan kami di bulan April ini
            Insyaallah sebagaimana yang pernah dikatakan oleh Syaidini Ali bin
            Abi Thalib "Apa yang menjadi takdirmu akan menemukan jalanya untuk
            menemukanmu"
          </p>
        </div>
      </div>
      {/*end journey*/}
      {/*our gallery*/}
      <div
        id="galeri"
        className="flex flex-col justify-center items-center pb-10"
      >
        <h1 className="font-sacramento text-[#E0AA3E] text-3xl pb-6">
          Our Gallery
        </h1>
        <div className="px-4">
          <Slide />
          <div className="pt-2 flex">
            <img
              src="/asset/pr1.jpg"
              alt="image"
              className="w-[202px] h-[202px] pr-1"
            />
            <img
              src="/asset/pr2.jpg"
              alt="image"
              className="w-[202px] h-[202px]"
            />
          </div>
          <div className="pt-1 flex">
            <img
              src="/asset/pr1.jpg"
              alt="image"
              className="w-[134px] h-[134px] "
            />
            <img
              src="/asset/pr5.jpg"
              alt="image"
              className="w-[135px] h-[135px] px-1"
            />
            <img
              src="/asset/pr6.jpg"
              alt="image"
              className="w-[134px] h-[134px]"
            />
          </div>
          <div className="pt-1 flex">
            <img
              src="/asset/pr3.jpg"
              alt="image"
              className="w-[202px] h-[202px] pr-1"
            />
            <img
              src="/asset/pr4.jpg"
              alt="image"
              className="w-[202px] h-[202px]"
            />
          </div>
        </div>
      </div>
      {/*end our gallery*/}
      {/*Kehadiran*/}
      <div id="kehadiran" className="flex justify-center px-8">
        <h1 className="font-sacramento text-[#E0AA3E] text-3xl pb-6">
          Kehadiran
        </h1>
      </div>
      {/*end Kehadiran*/}
      <Footer />
      {/* Button back to home */}
      <div className="px-6 fixed bottom-10 left-0 right-0 ">
        <div className="rounded bg-[#9B7651] text-white py-2 px-2">
          <div className="container mx-auto flex justify-center items-center">
            <div className="flex space-x-6 justify-center">
              <button onClick={handleScrollToTop}>
                <GoHomeFill className="hover:text-gray-400 transition duration-500 text-xl" />
              </button>
              <button onClick={handleScrollToGallery}>
                <IoMdPhotos className="hover:text-gray-400 transition duration-500 text-xl" />
              </button>
              <button onClick={handleScrollToAttendance}>
                <FaBook className="hover:text-gray-400 transition duration-500 text-xl" />
              </button>
            </div>
          </div>
        </div>
        <h1 className="relative left-44 bottom-20">
          <audio ref={audioRef} src="/cinta-terakhir.mp3" />
          <Musik isPlaying={isPlaying} onTogglePlay={togglePlay} />
        </h1>
      </div>

      {/* End button back to home */}
    </>
  );
}

export default Home;
