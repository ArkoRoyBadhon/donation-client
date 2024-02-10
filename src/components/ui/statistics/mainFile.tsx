"use client"
import { useAppSelector } from "@/redux/hook";
import ChartElem from "./chart";
import { useSession } from "next-auth/react";
import UserStatistics from "./userStatistics";

const MainFile = () => {
  const { user } = useAppSelector((state) => state.user);
  const { data: session }: any = useSession();
  
  return <div>
    {user?.role === "admin" && <ChartElem />}
    {(user?.role === "user") && <UserStatistics />}
    {(!user.role && !session) && <div className="px-5 md:px-28 h-[100vh] flex justify-center items-center">
        Please Login First
    </div> }
  </div>;
};

export default MainFile;
