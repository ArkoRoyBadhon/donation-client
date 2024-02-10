"use client";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useCreateUserMutation, useGetUserQuery, useLogOutMutation } from "@/redux/features/user/userApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { setLoggedInfo } from "@/redux/features/user/userSlice";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [useriD, setUserID] = useState()
  const { data: session }: any = useSession();
  const [logOut, {}] = useLogOutMutation();
  const {data:userData} = useGetUserQuery(undefined)
  const [createUser] = useCreateUserMutation(undefined)

  const dispatch = useAppDispatch()
  const router = useRouter()
  
  const handleLogout = async () => {
    signOut();
    await logOut(undefined);
    localStorage.setItem("accessToken", "");
    localStorage.setItem("access_email", "");
  };

  useEffect(()=> {
    dispatch(setLoggedInfo(userData?.data))
    localStorage.setItem("access_email",session?.user?.email)
    console.log("sess", session);
    
  },[userData,session])

  return (
    <div className=" min-h-14 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto bg-transparent z-12">
      <div className="flex justify-between items-center h-full py-5">
        <div className="">
          <Image
            className="w-[60%]"
            src={logoImg}
            width={200}
            height={200}
            alt="img"
          />
        </div>
        <div className="">
          <ul className="flex gap-8 font-semibold text-[16px]">
            <li className="">
              <Link href="/">Home</Link>
            </li>
            <li className="">
              <Link href="/donation">Donation</Link>
            </li>
            <li className="">
              <Link href="/statistics">Statistics</Link>
            </li>
            {session?.user?.email || userData?.data?.email ? (
              <>
                <li className="">
                  <Link onClick={() => handleLogout()} href="/login">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="">
                  <Link href="/login">Login</Link>
                </li>
                <li className="">
                  <Link href="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
