import DonationDetail from "@/components/ui/donationDetail";
import Image from "next/image";


const DonationDetailPage = ({ params }: { params: { id: string } }) => {



  return (
    <div className="">
        <DonationDetail id={params.id} />
    </div>
  );
};

export default DonationDetailPage;
