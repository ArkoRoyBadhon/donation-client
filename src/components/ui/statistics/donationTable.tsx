
import {
  useDeleteDonationMutation,
  useGetAllDonationCardQuery,
} from "@/redux/features/donation/donationApi";
import { useState } from "react";
import EditDonationModal from "./editDonationModal";
import { toast } from "react-toastify";

const DonationTable = () => {
  const { data: allDonation } = useGetAllDonationCardQuery(undefined);
  const [deleteDonation, { isSuccess:  isSuccessDel}] = useDeleteDonationMutation();
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [editModalData, setEditModalData] = useState<any>()

  if(isSuccessDel) {
    toast("Donation Card deleted Successsfully", {
      toastId: "donation-delete"
    })
    
  }

  return (
    <div className="overflow-x-auto mb-10">
      <table className="mt-5 min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {allDonation &&
            allDonation?.data?.map((item: any) => {
              return (
                <tr key={item._id}>
                  <td className="py-2 px-4 border-b">{item.title}</td>
                  <td className="py-2 px-4 border-b flex gap-2 justify-center">
                    <button
                      onClick={() => deleteDonation(item?.id)}
                      className="px-5 py-1 rounded-md bg-soft-red hover:bg-soft-red hover:text-white cursor-pointer transition-all ease-in"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        setEditModalOpen(true)
                        setEditModalData(item)
                      }}
                      className="px-8 py-1 rounded-md bg-soft-green hover:bg-green-400 hover:text-white cursor-pointer transition-all ease-in"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <div className={`${editModalOpen ? "block" : "hidden"}`}>
            <EditDonationModal  editModalOpen={editModalOpen} setEditModalOpen={setEditModalOpen} editMOdalData={editModalData} />
      </div>
    </div>
  );
};

export default DonationTable;
