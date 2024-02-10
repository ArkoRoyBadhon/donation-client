"use client";

import { useGetAllDonationCardQuery } from "@/redux/features/donation/donationApi";
import { useRouter } from "next/navigation";
import MainCard from "./mainCard";
import SkeletonCard from "./skeleton/skeletonCard";

const DonationElem = () => {
  const {
    data: allDonationCard,
    isSuccess,
    isLoading,
    error,
  } = useGetAllDonationCardQuery(undefined);

  const router = useRouter();

  return (
    <div className="w-full pt-10">
      <div className="mb-5">
        {isLoading && <SkeletonCard />}
        <div className="px-5 md:px-28 py-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-5 lg:gap-x-10 gap-y-10">
          {isSuccess &&
            allDonationCard?.data?.map((item: any) => {
              return (
                <div
                  onClick={() => router.push(`/donation/${item.id}`)}
                  key={item?.id}
                  className="cursor-pointer"
                >
                  <MainCard item={item} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DonationElem;
