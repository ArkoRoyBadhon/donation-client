import {
  useGetAllUserQuery,
  useUpdateUserMutation,
} from "@/redux/features/user/userApi";
import { toast } from "react-toastify";

const MakeAdmin = () => {
  const { data: allUser } = useGetAllUserQuery(undefined);
  const [updateUser, { isSuccess }] = useUpdateUserMutation();

  if (isSuccess) {
    toast("User promoted Successsfully", {
      toastId: "user-promote",
    });
  }
  console.log(allUser);

  const handleUpdate = async (data: any) => {
    const payload = {
      ...data,
      role: "admin",
    };
    // console.log("data inside", data);

    await updateUser(payload);
  };

  return (
    <div className="overflow-x-auto mb-10">
      <table className="mt-5 min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {allUser &&
            allUser?.data?.map((item: any) => {
              return (
                <tr key={item._id}>
                  <td className="py-2 px-4 border-b text-center">
                    {item?.email}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item?.role}
                  </td>
                  <td className="py-2 px-4 border-b flex gap-2 justify-center">
                    {item?.role !== "admin" ? (
                      <button
                        onClick={() => handleUpdate(item)}
                        className="px-5 py-1 rounded-md bg-soft-red hover:bg-soft-red hover:text-white cursor-pointer transition-all ease-in"
                      >
                        Make Admin
                      </button>
                    ) : (
                      <button className="px-5 py-1 rounded-md bg-soft-red hover:bg-soft-red text-white cursor-pointer transition-all ease-in">
                        Already Admin
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;
