import EditDonationModal from "./editDonationModal";

const UserTable = ({ specificDonation }: any) => {
  return (
    <div className="overflow-x-auto mb-10">

        
      <table className="mt-5 min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {specificDonation &&
            specificDonation?.data?.map((item: any) => {
              return (
                <tr key={item._id}>
                  <td className="py-2 px-4 border-b text-center">
                    {item?.donationInfo?.title}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item?.donationInfo?.category}
                  </td>

                  <td className="py-2 px-4 border-b text-center">
                    {item?.amount}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                  {new Date(item?.createdAt).toLocaleDateString('en-BD')}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
