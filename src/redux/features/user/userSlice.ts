import { createSlice } from "@reduxjs/toolkit";

export interface IRootState {
  user: {
    id: string | null;
    email: string | null;
    name: string | null;
    role: string | null;
  };
}

export const initialState: IRootState = {
  user: {
    id: null,
    email: null,
    name: null,
    role: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedInfo: (state, action) => {
      state.user.id = action?.payload?.id || null;
      state.user.email = action?.payload?.email || null;
      state.user.name = action?.payload?.name || null;
      state.user.role = action?.payload?.role || null;
    },
  },
});

export const { setLoggedInfo } = userSlice.actions;

export default userSlice.reducer;
