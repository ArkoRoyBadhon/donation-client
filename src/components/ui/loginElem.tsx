"use client";

import { useLoginUserMutation } from "@/redux/features/user/userApi";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/redux/hook";
import { toast } from "react-toastify";


type FormValues = {
  email: string;
  password: string;
};


const LoginElem = () => {
  const [userLogin] = useLoginUserMutation();
  const router = useRouter();
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await userLogin(data).unwrap();
      if (res?.data.accessToken) {
        localStorage.setItem("accessToken", res?.data?.accessToken);
      }
      
      toast("Logged in SuccessFully", {
        toastId: "login"
      })
      router.push("/");
    } catch (err: any) {
      toast("Login Failed", {
        toastId: "login-failed"
      })
    }
  };

  const handleLogin = async () => {
    await signIn("google", {
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex justify-center h-fit">
      <div className=" mt-10 md:mt-20 w-[400px] rounded-md">
        <h2 className="text-center text-soft-red font-bold py-5 text-[24px]">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="px-5 pt-2 pb-5" action="">
          <div className="flex flex-col mb-2">
            <label className="font-semibold mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter Name"
              className="px-3 py-1 rounded-md outline outline-1 focus:outline-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Password</label>
            <input
              type={`password`}
              {...register("password", { required: true })}
              placeholder="Enter Password"
              className="px-3 py-1 rounded-md outline outline-1 focus:outline-blue-400"
            />
          </div>
          <div className="flex justify-center">
            <input
              className="bg-soft-green hover:bg-green-500 px-5 cursor-pointer py-2 rounded-md mt-5 w-full font-semibold text-white"
              type="submit"
              value="Login"
            />
          </div>
        </form>

        <div className="relative mb-5 mx-5">
          <hr />
          <span className="absolute top-[-10px] bg-white rounded-full left-[46%] w-[30px] text-center">
            OR
          </span>
        </div>

        <div className="flex justify-center mx-5">
          <div
            onClick={() => handleLogin()}
            className="mt-2 cursor-pointer w-full"
          >
            <div className="bg-light hover:bg-soft-red flex items-center gap-3 py-2 justify-center rounded-md text-gray-700 w-full outline outline-1 hover:outline-none hover:text-white transition-all ease-in">
              <FcGoogle size={20} />{" "}
              <p className="font-semibold">Login with Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginElem;
