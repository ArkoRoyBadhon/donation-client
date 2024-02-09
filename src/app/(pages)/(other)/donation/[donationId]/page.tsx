import DonationDetail from "@/components/ui/donationDetail";
import Image from "next/image";


const DonationDetailPage = ({ params }: { params: { donationId: string } }) => {



  return (
    <div className="">
        <DonationDetail id={params.donationId} />
    </div>
  );
};

export default DonationDetailPage;
