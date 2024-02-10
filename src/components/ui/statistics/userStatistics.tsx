"use client";

import { useGetUserBasedDonationQuery } from "@/redux/features/donation/donationApi";
import UserTable from "./userTable";

const UserStatistics = () => {
  const { data: specificDonation } = useGetUserBasedDonationQuery();

  return (
    <div className="px-20">
        <h2 className="pt-10 text-[24px] font-bold text-soft-red">Your Donations</h2>
      <UserTable specificDonation={specificDonation} />
    </div>
  );
};

export default UserStatistics;
