import Image from "next/image";
import bannerImg from "@/assets/banner.png";
import Navbar from "@/components/shared/navbar";
import { IoIosSearch } from "react-icons/io";
import CardUi from "@/components/ui/cardUi";

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
            <div className="text-black px-2 h-full bg-[#FF444A] flex justify-center items-center">
              <IoIosSearch size={30} />
            </div>
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

      <div className="mb-5">
        <div className="md:px-20 lg:px-24 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-5 lg:gap-x-10 gap-y-10 px-5 ">
          <CardUi />
          <CardUi />
          <CardUi />
          <CardUi />
        </div>
        <div className="flex justify-center ">
          <span className="py-2 font-semibold bg-[#FF444A] text-white px-5 rounded-md cursor-pointer">
            See More
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
