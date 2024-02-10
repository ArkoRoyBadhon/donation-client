"use client";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useGetUserQuery, useLogOutMutation } from "@/redux/features/user/userApi";
import { useAppDispatch} from "@/redux/hook";
import { useEffect } from "react";
import { setLoggedInfo } from "@/redux/features/user/userSlice";
import { useRouter,usePathname  } from "next/navigation";

const Navbar = () => {
  const { data: session }: any = useSession();
  const [logOut, {}] = useLogOutMutation();
  const {data:userData} = useGetUserQuery(undefined)

  const dispatch = useAppDispatch()
  const router = useRouter()
  const pathname = usePathname().slice(1)

  console.log("pathName", pathname);
  
  
  const handleLogout = async () => {
    signOut();
    await logOut(undefined);
    localStorage.setItem("accessToken", "");
    localStorage.setItem("access_email", "");
  };

  useEffect(()=> {
    dispatch(setLoggedInfo(userData?.data))
    localStorage.setItem("access_email",session?.user?.email)
    
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
          <ul className="flex gap-5 font-semibold text-[16px]">
            <li className={`${pathname === "home" && "text-soft-red underline"} `}>
              <Link href="/">Home</Link>
            </li>
            <li className={`${pathname === "donation" && "text-soft-red underline"} `}>
              <Link href="/donation">Donation</Link>
            </li>
            <li className={`${pathname === "statistics" && "text-soft-red underline"} `}>
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
                <li className={`${pathname === "login" && "text-soft-red underline"} `}>
                  <Link href="/login">Login</Link>
                </li>
                <li className={`${pathname === "register" && "text-soft-red underline"} `}>
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
