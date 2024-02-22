"use client";

import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const PaymentWraper = () => {
  const params = useSearchParams();

  // console.log("params", router.get('status'));
  return (
    <div className="min-h-[100vh] flex justify-center items-center">
      {params.get("status") === "success" && (
        <h1 className="text-center text-[24px]">Payment done</h1>
      )}
      {params.get("status") === "fail" && (
        <h1 className="text-center text-[24px]">Payment failed</h1>
      )}
      {params.get("status") === "cancel" && (
        <h1 className="text-center text-[24px]">Payment Cancel</h1>
      )}
    </div>
  );
};

const PaymentCompo = () => {
  return (
    <Suspense>
      <PaymentWraper />
    </Suspense>
  );
};

export default PaymentCompo;
