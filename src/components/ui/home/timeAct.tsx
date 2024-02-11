import Image from "next/image";
import Link from "next/link";
import actImg from '@/assets/Screenshot-2021-09-12-at-2.webp'

const TimeAct = () => {
  return (
    <div className="px-5 md:px-28 py-10 flex justify-center items-center flex-col-reverse md:flex-row gap-10">
      <div className="w-full md:w-[50%]">
        <h3 className="text-[24px] text-soft-red font-semibold leading-8">
          It's Time to Act
        </h3>
        <p className="py-3">
          For over 20 years and across 50 countries, Pure Earth has been
          committed to solving the pollution crisis, which robs millions of
          children of their full potential and holds back entire communities.
          Pure Earth is focusing on two of the most dangerous neurotoxins– lead
          and mercury– with a goal of reducing the poisoning and brain damage of
          children in target countries over the next 10 years.
        </p>
        <p className="">
          Exposure to pollution is taking a staggering toll on the health of the
          world’s children, but unlike many global challenges, this one has
          solutions at hand.
        </p>
        <div className="my-10">
        <Link
          href="/donation"
          className="px-5 py-2 bg-soft-red text-white rounded-sm font-semibold"
        >
          Donate
        </Link>
        </div>
      </div>
      <div className="w-full md:w-[50%]">
        <Image className="rounded-md" src={actImg} alt="img" height={600} width={600} />
      </div>
    </div>
  );
};

export default TimeAct;
