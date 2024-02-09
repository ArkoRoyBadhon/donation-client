"use client";

import { useGetAllDonationCardQuery } from "@/redux/features/donation/donationApi";
import CardUi from "./cardUi";

const DonationElem = () => {
  const { data: allDonationCard } = useGetAllDonationCardQuery(undefined);
  return (
    <div className="w-full pt-10">
      <div className="mb-5">
        <div className="md:px-20 lg:px-24 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-5 lg:gap-x-10 gap-y-10 px-5 ">
          {allDonationCard &&
            allDonationCard?.data?.map((item: any) => {
              return (
                <div key={item?.id} className="">
                  <CardUi item={item} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DonationElem;
