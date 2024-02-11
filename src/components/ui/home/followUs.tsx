import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";

const FollowUs = () => {
  return (
    <div className="px-5 md:px-28 py-10">
      <h4 className="text-[20px] font-semibold px-5 text-center">
        Follow us on Social, and share with your friends too
      </h4>
      <div className="flex justify-center gap-5 my-3">
        <FaFacebookSquare size={30} />
        <RiInstagramFill size={30} />
        <FaLinkedin size={30} />
      </div>
    </div>
  );
};

export default FollowUs;
