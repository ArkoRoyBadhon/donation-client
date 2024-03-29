"use client";
import { useCreateUserDonationMutation } from "@/redux/features/donation/donationApi";
import { useCreateDonationPaymentMutation } from "@/redux/features/order/orderApi";
// import { useCreateDonationOrderMutation } from "@/redux/features/order/orderApi";
import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const ProcedureDonateElem = () => {
  const { donation } = useAppSelector((state) => state.donation);
  const { user } = useAppSelector((state) => state.user);
  const [createDonationPayment, { data: orderData, isSuccess, error }] = useCreateDonationPaymentMutation();
  // const [createDonationOrder, { data: orderData, isSuccess, error }] = useCreateDonationOrderMutation();
  const [amountVal, setAmountVal] = useState<number>(100);

  const router = useRouter();

  const handleProceed = async () => {
    if (amountVal <= 99) {
      toast(`not less than ${amountVal}tk`, {
        toastId: "procedure",
      });
    }

    if (amountVal >= 100) {
      const donationData = {
        donar_id: user?.id,
        donar_name: user?.name,
        donar_email: user?.email,
        donationId: donation?.id,
        amount: amountVal,
      };
      // await createDonationOrder(donationData);
      const res = await createDonationPayment(donationData);

      console.log("",res);
    }
  };
  
  if (isSuccess) {
    toast("Donation payment Successfully", {
      toastId: "donation-pay",
    });
    router.push(orderData?.data)
    // window.location.replace(orderData?.data);
  }
  if (error) {
    toast("Donation Faied to pay", {
      toastId: "donation-pay-failed",
    });
  }

  console.log("order url", orderData?.data);

  return (
    <div className="px-5 md:px-30 pt-10">
      <div className="">
        <h2 className="font-semibold text-center text-soft-red text-[28px]">
          Proceed Your Donation
        </h2>
        {!donation.title ? (
          <div className="text-[24px] h-[500px] w-full flex justify-center items-center font-semibold">
            Please Select a Donation!
          </div>
        ) : (
          <div className="flex justify-center mt-20">
            <div className="border w-full mx-5 md:w-[500px] p-10 rounded-md">
              <h4 className="font-semibold text-[20px]">{donation?.title}</h4>
              <h4 className="text-[16px]">{donation?.category}</h4>
              <input
                onChange={(e) => setAmountVal(Number(e.target?.value))}
                type="text"
                placeholder="Amount"
                className="border outline-none px-2 py-2 mt-2"
                defaultValue="100"
              />{" "}
              <span>TK</span>
              <div
                className="px-5 py-2 mt-5 bg-soft-red text-center text-white rounded-sm cursor-pointer"
                onClick={() => handleProceed()}
              >
                Proceed
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcedureDonateElem;
