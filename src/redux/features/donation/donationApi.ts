import { api } from "../../api/apiSlice";

const donationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDonationCalculation: builder.query({
      query: () => ({
        url: `/donation/calculation`,
      }),
      providesTags: ["donation"],
    })
  }),
});

export const {
  useGetDonationCalculationQuery
} = donationApi;
