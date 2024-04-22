import Link from "next/link";
import { GoHomeFill } from "react-icons/go";
import { IoMdPhotos, IoIosMusicalNotes } from "react-icons/io";
import { FaBook, FaCircleDown } from "react-icons/fa6";

const Button = () => {
  return (
    <div className="px-4">
      <header className="rounded bg-[#9B7651] text-white py-4">
        <div className="container mx-auto flex justify-center items-center">
          <ul className="flex space-x-6 justify-center">
            <li>
              <Link href="#beranda">
                <GoHomeFill className="hover:text-gray-400 transition duration-500 text-xl" />
              </Link>
            </li>
            <li>
              <Link href="#galeri">
                <IoMdPhotos className="hover:text-gray-400 transition duration-500 text-xl" />
              </Link>
            </li>
            <li>
              <Link href="#kehadiran">
                <FaBook className="hover:text-gray-400 transition duration-500 text-xl" />
              </Link>
            </li>
            <li>
              <Link href="/kontak">
                <IoIosMusicalNotes className="hover:text-gray-400 transition duration-500 text-xl" />
              </Link>
            </li>
            <li>
              <Link href="/kontak">
                <FaCircleDown className="hover:text-gray-400 transition duration-500 text-xl" />
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Button;
