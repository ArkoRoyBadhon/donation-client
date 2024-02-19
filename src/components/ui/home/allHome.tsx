"use client";
import Image from "next/image";
import bannerImg from "@/assets/banner.png";
import Navbar from "@/components/shared/navbar";
import { IoIosSearch } from "react-icons/io";
import CardUi from "@/components/ui/cardUi";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useGetAllDonationCardQuery } from "@/redux/features/donation/donationApi";
import { useRouter } from "next/navigation";
import SkeletonCard from "../skeleton/skeletonCard";
import TimeAct from "./timeAct";
import FollowUs from "./followUs";
import Volunteer from "./volunteer";

const AllHome = () => {
  const { data: session }: any = useSession();
  const [searchVal, setSearchVal] = useState();
  const [searchTerm, setSearchTerm] = useState();
  const router = useRouter();

  const { data: allDonationCard, isSuccess, isLoading } = useGetAllDonationCardQuery(searchTerm);


  const handleSearch = () => {
    setSearchTerm(searchVal);
  };

  return (
    <div className="w-full">
      <div className="relative w-full">
        <div className=" top-0 z-5 w-full">
          <Navbar />
        </div>
        <div className="absolute bg-white w-[100%] h-[450px] opacity-80"></div>
        <div className="absolute w-[100%] h-[350px] md:h-[450px] opacity-80 flex flex-col justify-center items-center capitalize text-[28px] md:text-[36px] font-bold text-black z-5">
          <h1 className="text-center">I Grow By helping people in need</h1>
          <div className="border w-[70%] md:w-[30%] border-gray-400 flex justify-center items-center rounded-md mt-5 bg-white">
            <input
              onChange={(e: any) => setSearchVal(e.target.value)}
              className="text-[16px] px-5 py-2 rounded-md outline-none m-0 w-full"
              type="text"
              placeholder="Search here..."
            />
            <div
              className="text-black px-4 h-full bg-[#FF444A] flex justify-center items-center rounded-r-md"
              onClick={() => handleSearch()}
            >
              <IoIosSearch size={30} />
            </div>
          </div>
        </div>
        <div className="w-[100%]">
          <Image
            className="w-[100%] h-[350px] md:h-[450px] bg-contain"
            src={bannerImg}
            width={800}
            height={800}
            alt="img"
          />
        </div>
      </div>

      <div className="mb-5">
        {isLoading && <div className="py-10"><SkeletonCard /></div> }
        {isSuccess && (
          <>
            <div className="md:px-20 lg:px-24 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-5 lg:gap-x-10 gap-y-10 px-5 ">
              {allDonationCard &&
                allDonationCard?.data?.slice(0, 4).map((item: any) => {
                  return (
                    <div
                      onClick={() => router.push(`/donation/${item.id}`)}
                      key={item?.id}
                      className=""
                    >
                      <CardUi item={item} />
                    </div>
                  );
                })}
            </div>
            <div className="flex justify-center ">
              <span
                onClick={() => router.push("/donation")}
                className="py-2 font-semibold bg-[#FF444A] text-white px-5 rounded-md cursor-pointer"
              >
                See More
              </span>
            </div>
          </>
        )}
      </div>

      {/* <TimeAct /> */}

      <Volunteer />
      <FollowUs />
    </div>
  );
};

export default AllHome;
