import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/logo.png"

const NotFoundPage = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <div className="">
        <Image src={logoImg} alt="img" height={500} width={500} />
        <h2 className="mt-10">Not Found This Page</h2>
        <p>Could not find requested resource</p>
        <Link className="text-soft-green font-bold" href="/">Return Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
