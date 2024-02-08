import Navbar from "@/components/shared/navbar";
import React from "react";

const OtherPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default OtherPageLayout;
