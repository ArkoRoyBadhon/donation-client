import { api } from "../../api/apiSlice";

const donationApi:any = api.injectEndpoints({
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
    deleteDonation: builder.mutation({
      query: (id) => ({
        url: `/donation/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["donation"],
    }),
    updateDonation: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/donation/update/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["donation"],
    }),
    getUserBasedDonation: builder.query({
      query: () => ({
        url: `/donation/single-user-donate`
      }),
      providesTags: ["donation"],
    }),
    createUserDonation: builder.mutation({
      query: (donationData) => ({
        url: `/donation/user-donate`,
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
  useCreateDonationMutation,
  useDeleteDonationMutation,
  useUpdateDonationMutation,
  useGetUserBasedDonationQuery,
  // user donation
  useCreateUserDonationMutation
} = donationApi;
