"use client";

import { useCreateUserMutation, useLoginUserMutation } from "@/redux/features/user/userApi";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/redux/hook";
import { toast } from "react-toastify";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

const RegisterElem = () => {
  const [createUser] = useCreateUserMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await createUser(data).unwrap();
      if (res?.data.accessToken) {
        localStorage.setItem("accessToken", res?.data?.accessToken);
      }
      toast("Registration SuccessFully", {
        toastId: "registration"
      })
      router.push("/login");
    } catch (err: any) {
      toast("Registration Failed", {
        toastId: "registration-failed"
      })
    }
  };

  return (
    <div className="flex justify-center h-fit">
      <div className=" mt-10 md:mt-20 w-[400px] rounded-md">
        <h2 className="text-center text-soft-red font-bold py-5 text-[24px]">
          Register
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-5 pt-2 pb-5"
          action=""
        >
          <div className="flex flex-col mb-2">
            <label className="font-semibold mb-1">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter Name"
              className="px-3 py-1 rounded-md outline outline-1 focus:outline-blue-400"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="font-semibold mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter Email"
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
              value="Register"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterElem;
