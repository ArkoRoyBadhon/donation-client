import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: `/auth/get-user`,
      }),
      providesTags: ["user"],
    }),
    getAllUser: builder.query({
      query: () => ({
        url: `/auth/all-user`,
      }),
      providesTags: ["user"],
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: `/auth/signup`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `/auth/update`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: `/auth/signin`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    logOut: builder.mutation({
      query: (data) => ({
        url: `/auth/logout`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetAllUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useLoginUserMutation,
  useLogOutMutation
} = userApi;
