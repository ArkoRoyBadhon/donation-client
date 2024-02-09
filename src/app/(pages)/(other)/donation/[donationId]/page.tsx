import Image from "next/image";
import img from "@/assets/food.png";

const DonationDetailPage = ({ params }: { params: { donationId: string } }) => {
  return (
    <div className="px-10 md:px-40">
      <div className="relative">
        <div className="flex justify-center">
          <Image
            className="w-full h-[500px] bg-contain rounded-lg"
            src={img}
            alt=""
            width="800"
            height="800"
          />
        </div>
        <div className="absolute w-full bg-black h-[100px] z-5 bottom-0 opacity-50 "></div>
        <div className="absolute flex justify-start items-center bottom-0 h-[100px]">
          <div className="text-white px-5 bg-soft-green ml-5 py-2 rounded-sm z-6 cursor-pointer">
            Donate 500 BDT
          </div>
        </div>
      </div>
      <div className="py-10">
        <h2 className="text-[28px] font-bold mb-3">Good Education</h2>
        <p className="leading-8 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi earum libero doloribus rem! Recusandae tenetur fuga dolorum quos? Ea cumque in veniam provident architecto error est corrupti alias reprehenderit obcaecati voluptatum molestias, eveniet repellat. Necessitatibus sit pariatur deleniti perferendis. Voluptates harum ipsum iusto porro voluptatibus cum, soluta eaque officiis. Cumque.</p>
      </div>
    </div>
  );
};

export default DonationDetailPage;
