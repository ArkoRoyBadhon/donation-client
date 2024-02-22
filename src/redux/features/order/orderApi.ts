import { api } from "../../api/apiSlice";

const paymentApi:any = api.injectEndpoints({
  endpoints: (builder) => ({

    createDonationPayment: builder.mutation({
      query: (donationData) => ({
        url: `/payment/init`,
        method: "POST",
        body: donationData,
      }),
      invalidatesTags: ["donation"],
    }),
  }),
});

export const {
    useCreateDonationPaymentMutation
} = paymentApi;
