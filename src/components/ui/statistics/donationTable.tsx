import { useGetAllDonationCardQuery } from "@/redux/features/donation/donationApi";


const DonationTable = () => {
    const {data: allDonation} = useGetAllDonationCardQuery(undefined)

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
                        // onClick={() => handleDelUser(item?._id)}
                        className="px-5 py-1 rounded-md bg-soft-red hover:bg-soft-red hover:text-white cursor-pointer transition-all ease-in"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => {
                        //   setEditUser(true);
                        //   setEUser(item);
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
      </div>
    );
};

export default DonationTable;