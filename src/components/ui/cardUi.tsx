import Image from "next/image";
import foodImg from "@/assets/food.png";

const CardUi = ({ item }: any) => {
  console.log("data", item);

  return (
    <div
      className={`w-full lg:w-[300px] shadow-md h-[350px] rounded-md bg-[#D9E5FF] cursor-pointer`}
    >
      <Image
        className="w-full bg-contain h-[65%]"
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
