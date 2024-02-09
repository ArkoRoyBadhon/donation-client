import { api } from "../../api/apiSlice";

const donationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDonationCalculation: builder.query({
      query: () => ({
        url: `/donation/calculation`,
      }),
      providesTags: ["donation"],
    }),
    getAllDonationCard: builder.query({
      query: (searchTerm) => ({
        url: `/donation/get-all`,
        params: {
            ...(searchTerm && {searchTerm: searchTerm})
        }
      }),
      providesTags: ["donation"],
    }),

  }),
});

export const {
  useGetDonationCalculationQuery,
  useGetAllDonationCardQuery
} = donationApi;
