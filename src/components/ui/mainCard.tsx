import Image from "next/image";
import foodImg from "@/assets/food.png";

const MainCard = ({ item }: any) => {
  console.log("data", item);

  return (
    <div
      className={` shadow-md h-[210px] rounded-md 
      ${
        (item?.category === ("food" || "education" || "health")) && "bg-light-blue"
      }
      ${
        item?.category === ("clothing" || "religion") && "bg-light-green"
      }
       cursor-pointer flex`}
    >
      <div className="w-[50%]">
        <Image
          className="w-full bg-contain h-full rounded-l-md"
          src={item?.img}
          alt="img"
          width={300}
          height={300}
        />
      </div>
      <div className="px-4 pt-4 w-[50%]">
        <div
          className={`bg-[#AEC8FF] w-fit px-5 py-[2px] rounded-md text-[#0052FF] font-bold`}
        >
          {item.category}
        </div>
        <h4
          className={`text-[#0052FF] mt-2 font-bold text-[14px] md:text-[20px]`}
        >
          {item.title.slice(0, 16)}..
        </h4>
        <h6
          className={`text-blue-400 mt-2 font-bold text-[14px] md:text-[20px]`}
        >
          {item.subCategory}
        </h6>
        <div className="px-5 py-2 bg-soft-red mt-7 font-semibold text-white cursor-pointer rounded-sm text-[14px] md:text-[20px] w-fit">
          View Details
        </div>
      </div>
    </div>
  );
};

export default MainCard;
