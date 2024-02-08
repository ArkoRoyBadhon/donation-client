import LoginElem from "@/components/ui/loginElem";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <div className="md:px-20 lg:px-24">
      <LoginElem />
    </div>
  );
};

export default LoginPage;
