// "use client";
import { useCreateDonationMutation } from "@/redux/features/donation/donationApi";
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

const AddDonationModal = ({
  addModalOpen,
  setAddModalOpen,
}: {
  addModalOpen: boolean;
  setAddModalOpen: any;
}) => {
  const [createDonation, { isSuccess, error }] = useCreateDonationMutation();
  const img_hosting_token = process.env.NEXT_PUBLIC_IMAGE_UPLOAD;


  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>();
  const onSubmit: SubmitHandler<User> = async (data) => {

    const formData = new FormData();
    formData.append("img", data.img[0]);

    try {
      const donationData = {
        ...data,
        category: data && data?.category?.value,
      };
        await createDonation(donationData);
        reset();
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  if (isSuccess) {
    toast("Donation Added", {
      toastId: "donation-add"
    })
  }
  if (error) {
    toast("Donation Faied to Add", {
      toastId: "donation-failed"
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
        addModalOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-end">
        <div
          className="cursor-pointer
          px-2 py-1 bg-red-300 w-fit"
          onClick={() => {
            setAddModalOpen(false);
          }}
        >
          close
        </div>
      </div>
      <div className="">
        <h3 className="text-center font-bold underline text-lg">Add Donation</h3>
        <div className="mt-10 w-full ">
          <form className="w-full px-10" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-2">
              <label htmlFor="">Title</label>
              <input
                className="py-1 px-2 mx-auto rounded-md w-full"
                type="text"
                // defaultValue={EUser?.name}
                placeholder="Title"
                {...register("title")}
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
                // defaultValue={EUser?.name}
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
                // defaultValue={EUser?.name}
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
                // defaultValue={EUser?.name}
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
                value="Add Donation"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDonationModal;
