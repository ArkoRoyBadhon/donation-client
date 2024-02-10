"use client";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import {
  useGetUserQuery,
  useLogOutMutation,
} from "@/redux/features/user/userApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect, useState } from "react";
import { setLoggedInfo } from "@/redux/features/user/userSlice";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const { data: session }: any = useSession();
  const [logOut, {}] = useLogOutMutation();
  const { data: userData } = useGetUserQuery(undefined);
  const { user: userRedux } = useAppSelector((state) => state.user);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const pathname = usePathname().slice(1);

  const handleLogout = async () => {
    signOut();
    await logOut(undefined);
    localStorage.setItem("accessToken", "");
    localStorage.setItem("access_email", "");
  };
  

  useEffect(() => {
    dispatch(setLoggedInfo(userData?.data));
    localStorage.setItem("access_email", session?.user?.email);
  }, [userData, session]);


  return (
    <div className="relative min-h-14 px-5 md:px-28 bg-transparent z-12">
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
        <div className="hidden md:block">
          <ul className="flex gap-5 font-semibold text-[16px]">
            <li
              className={`${pathname === "home" && "text-soft-red underline"} `}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`${
                pathname === "donation" && "text-soft-red underline"
              } `}
            >
              <Link href="/donation">Donation</Link>
            </li>
            <li
              className={`${
                pathname === "statistics" && "text-soft-red underline"
              } `}
            >
              <Link href="/statistics">
                {userRedux?.role === "admin" ? "Statistics" : "Dashboard"}
              </Link>
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
                <li
                  className={`${
                    pathname === "login" && "text-soft-red underline"
                  } `}
                >
                  <Link href="/login">Login</Link>
                </li>
                <li
                  className={`${
                    pathname === "register" && "text-soft-red underline"
                  } `}
                >
                  <Link href="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="md:hidden">
          <GiHamburgerMenu
            onClick={() => setMobileMenu(!mobileMenu)}
            size={25}
          />
        </div>
        <div
          className={`fixed md:hidden z-10 transition-all ease-in top-[0px] bg-white h-[100vh] w-[100vw] p-5 ${
            mobileMenu ? "right-[0px] " : "right-[500px]"
          }`}
        >
          <div className="flex justify-end">
            <MdClose onClick={() => setMobileMenu(false)} size={25} />
          </div>
          <div className="">
            <div className="flex justify-center">
              <Image
                className="w-[50%] mb-5"
                src={logoImg}
                alt="logo"
                height={300}
                width={300}
              />
            </div>
            <hr />
            <div className="mt-10">
              <ul className="flex flex-col font-semibold text-[16px] text-white">
                <li onClick={() => setMobileMenu(false)}
                  className={`py-2 text-center hover:bg-red-400 bg-red-200 border ${
                    pathname === "home" && "bg-red-400"
                  } `}
                >
                  <Link href="/">Home</Link>
                </li>
                <li onClick={() => setMobileMenu(false)}
                  className={`py-2 text-center bg-red-200 hover:bg-soft-red border ${
                    pathname === "donation" && "bg-soft-red"
                  } `}
                >
                  <Link href="/donation">Donation</Link>
                </li>
                <li onClick={() => setMobileMenu(false)}
                  className={`py-2 text-center  bg-red-200 hover:bg-soft-red border ${
                    pathname === "statistics" && "bg-soft-red"
                  } `}
                >
                  <Link href="/statistics">
                    {userRedux?.role === "admin" ? "Statistics" : "Dashboard"}
                  </Link>
                </li>
                {session?.user?.email || userData?.data?.email ? (
                  <>
                    <li onClick={() => setMobileMenu(false)} className="bg-red-200 hover:bg-soft-red text-center py-2 border">
                      <Link onClick={() => handleLogout()} href="/login">
                        Logout
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li onClick={() => setMobileMenu(false)}
                      className={`bg-red-200 hover:bg-soft-red py-2 text-center border ${
                        pathname === "login" && "bg-soft-red"
                      } `}
                    >
                      <Link href="/login">Login</Link>
                    </li>
                    <li onClick={() => setMobileMenu(false)}
                      className={`bg-red-200 hover:bg-soft-red py-2 text-center border ${
                        pathname === "register" && "bg-soft-red"
                      } `}
                    >
                      <Link href="/register">Register</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
