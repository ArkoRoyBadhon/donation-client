// "use client";
import {
  useCreateDonationMutation,
  useUpdateDonationMutation,
} from "@/redux/features/donation/donationApi";
import ImgUpload from "@/utils/ImgUpload";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Select from "react-select";
import { toast } from "react-toastify";

interface User {
  id?: string;
  title: string;
  img: string;
  category: any;
  subCategory: any;
  description: string;
}

const EditDonationModal = ({
  editModalOpen,
  setEditModalOpen,
  editMOdalData,
}: {
  editModalOpen: boolean;
  setEditModalOpen: any;
  editMOdalData: any;
}) => {
  const [updateDonation, { isSuccess, error }] = useUpdateDonationMutation();
  const img_hosting_token = process.env.NEXT_PUBLIC_IMAGE_UPLOAD;

  console.log("datt", editMOdalData);

  //   let id = editMOdalData && editMOdalData?.id

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>();
  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      const donationData = {
        ...data,
        category: data && data?.category?.value,
      };

      const { id, ...payload } = donationData;
      const info = {
        id,
        payload,
      };

      await updateDonation(info);
      //   reset();
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  if (isSuccess) {
    toast("Donation updaded Successfully", {
      toastId: "donation-update"
    })
  }
  if (error) {
    toast("Donation Faied to update", {
      toastId: "donation-update-failed"
    })
  }

  const categoryOptions: any = [
    { value: "food", label: "Food" },
    { value: "education", label: "Education" },
    { value: "clothing", label: "Clothing" },
    { value: "health", label: "Health" },
    { value: "religion", label: "Religion" },
  ];

  return (
    <div
      className={`fixed top-[100px] min-h-fit pb-10 bg-gray-200 shadow-md w-[350px] md:w-[400px] rounded-md overflow-hidden ${
        editModalOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-end">
        <div
          className="cursor-pointer
          px-2 py-1 bg-red-300 w-fit"
          onClick={() => {
            setEditModalOpen(false);
          }}
        >
          close
        </div>
      </div>
      <div className="">
        <h3 className="text-center font-bold underline text-lg">
          Edit Donation
        </h3>
        <div className="mt-10 w-full ">
          <form className="w-full px-10" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-2">
              <label htmlFor="">Title</label>
              <input
                className="py-1 px-2 mx-auto rounded-md w-full"
                type="text"
                defaultValue={editMOdalData?.title}
                placeholder="Title"
                {...register("title")}
              />
              {errors.title && (
                <span className="text-center text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-2 hidden">
              <label htmlFor="">ID</label>
              <input
                className="py-1 px-2 mx-auto rounded-md w-full"
                type="text"
                defaultValue={editMOdalData?.id}
                placeholder="Id"
                {...register("id")}
              />
              {errors.title && (
                <span className="text-center text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="">Image</label>
              <input
                className="py-1 px-2 mx-auto rounded-md w-full"
                type="text"
                defaultValue={editMOdalData?.img}
                placeholder="Image link"
                {...register("img")}
              />
              {errors.title && (
                <span className="text-center text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* <div className="flex flex-col mb-2">
              <label htmlFor="">Image</label>
              <input
                className="py-1 px-2 mx-auto rounded-md w-full"
                type="file"
                placeholder="Image"
                {...register("img", { required: true })}
              />
              {errors.img && (
                <span className="text-center text-red-500">
                  This field is required
                </span>
              )}
            </div> */}
            <div className="">
              <label htmlFor="">Category</label>
              <div className="">
                <Controller
                  control={control}
                  name="category"
                  defaultValue={editMOdalData?.category}
                  render={({ field }) => (
                    <Select options={categoryOptions} {...field} />
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="">Sub Category</label>
              <input
                className="py-1 px-2 mx-auto rounded-md w-full"
                type="text"
                defaultValue={editMOdalData?.subCategory}
                placeholder="Sub Category"
                {...register("subCategory")}
              />
              {errors.subCategory && (
                <span className="text-center text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="">Description</label>
              <textarea
                className="py-1 px-2 mx-auto rounded-md w-full"
                defaultValue={editMOdalData?.description}
                placeholder="Description..."
                {...register("description")}
              />
              {errors.description && (
                <span className="text-center text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex flex-col mt-5">
              <input
                className="bg-soft-green py-2 rounded-md cursor-pointer text-white mx-auto w-full md:w-[60%]"
                type="submit"
                value="Edit Donation"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditDonationModal;
