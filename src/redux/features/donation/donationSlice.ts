import { createSlice } from "@reduxjs/toolkit";

export interface IRootState {
  donation: {
    id: string | null;
    title: string | null;
    category: string | null;
    amount: string | null;
  };
}

export const initialState: IRootState = {
  donation: {
    id: null,
    title: null,
    category: null,
    amount: null,
  },
};

const donationSlice = createSlice({
  name: "donation",
  initialState,
  reducers: {
    setDonationInfo: (state, action) => {
      state.donation.id = action?.payload?.id || null;
      state.donation.title = action?.payload?.title || null;
      state.donation.category = action?.payload?.category || null;
      state.donation.amount = action?.payload?.amount || null;
    },
  },
});

export const { setDonationInfo } = donationSlice.actions;

export default donationSlice.reducer;
