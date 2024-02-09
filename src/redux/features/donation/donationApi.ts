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
    getDonationDetail: builder.query({
      query: (id) => ({
        url: `/donation/get-single/${id}`,
      }),
      providesTags: ["donation"],
    }),
    createDonation: builder.mutation({
      query: (donationData) => ({
        url: `/donation/create`,
        method: "POST",
        body: donationData,
      }),
      invalidatesTags: ["donation"],
    }),

  }),
});

export const {
  useGetDonationCalculationQuery,
  useGetAllDonationCardQuery,
  useGetDonationDetailQuery,
  useCreateDonationMutation
} = donationApi;
