import Image from "next/image";
import bannerImg from "@/assets/banner.png";
import Navbar from "@/components/shared/navbar";
import { IoIosSearch } from "react-icons/io";

const HomePage = () => {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <div className="absolute top-0 z-10 w-full">
          <Navbar />
        </div>
        <div className="absolute bg-white w-[100%] h-[450px] opacity-80"></div>
        <div className="absolute w-[100%] h-[450px] opacity-80 flex flex-col justify-center items-center capitalize text-[36px] font-bold text-black z-10">
          <h1>I Grow By helping people in need</h1>
          <div className="border border-gray-400 flex justify-center items-center rounded-md mt-5 bg-white">
            <input
              className="text-[16px] px-5 py-2 rounded-md outline-none m-0"
              type="text"
              placeholder="Search here..."
            />
            <button className="text-black px-2 hover:bg-gray-300">
            <IoIosSearch />
            </button>
          </div>
        </div>
        <div className="w-[100%]">
          <Image
            className="w-[100%] h-[450px] bg-contain"
            src={bannerImg}
            width={800}
            height={800}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
