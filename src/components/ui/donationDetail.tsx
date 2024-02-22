"use client";

import Image from "next/image";
import img from "@/assets/food.png";
import { useGetDonationDetailQuery } from "@/redux/features/donation/donationApi";
import { useAppDispatch } from "@/redux/hook";
import { setDonationInfo } from "@/redux/features/donation/donationSlice";
import { useRouter } from "next/navigation";

const DonationDetail = ({ id }: { id: string }) => {
  const { data: donationData } = useGetDonationDetailQuery(id);
  const dispatch = useAppDispatch()
  const router = useRouter()


  return (
    <div className="px-5 md:px-28">
      <div className="relative">
        <div className="flex justify-center">
          <Image
            className="w-full md:h-[500px] bg-contain rounded-lg"
            src={donationData?.data?.img}
            alt=""
            width="800"
            height="800"
          />
        </div>
        <div className="absolute w-full bg-black h-[80px] md:h-[100px] z-5 bottom-0 opacity-50 "></div>
        <div className="absolute flex justify-start items-center bottom-0 h-[80px] md:h-[100px]">
          <div onClick={()=> {dispatch(setDonationInfo(donationData?.data)); router.push("/donation/procedure")} } className="text-white px-5 bg-soft-red ml-5 py-2 rounded-sm z-6 cursor-pointer">
            Donate 100 BDT
          </div>
        </div>
      </div>
      <div className="py-10">
        <h2 className="text-[28px] font-bold mb-3">
          {donationData?.data?.title}
        </h2>
        <p className="leading-8 text-justify text-[16px]">
          {donationData?.data?.description}
        </p>
      </div>
    </div>
  );
};

export default DonationDetail;
