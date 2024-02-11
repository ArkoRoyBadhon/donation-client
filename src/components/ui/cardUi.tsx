import Image from "next/image";
import foodImg from "@/assets/food.png";

const CardUi = ({ item }: any) => {

  return (
    <div
      className={`shadow-md h-[300px] rounded-md ${
        (item?.category === ("food" || "education" || "health")) && "bg-light-blue"
      }
      ${
        item?.category === ("clothing" || "religion") && "bg-light-green"
      } cursor-pointer`}
    >
      <Image
        className="w-full bg-contain h-[65%] rounded-t-md"
        src={item?.img}
        alt="img"
        width={300}
        height={300}
      />
      <div className="px-4 pt-4">
        <div
          className={`bg-[#AEC8FF] w-fit px-5 py-[2px] rounded-md text-[#0052FF] font-bold`}
        >
          {item.category}
        </div>
        <h4 className={`text-[#0052FF] mt-2 font-bold text-[20px]`}>
          {item.title}
        </h4>
      </div>
    </div>
  );
};

export default CardUi;
