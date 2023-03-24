import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: [],
};

export const counterSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    addNewFormData: (state, action) => {
      state.formData.push(action.payload);
    },
  },
});

export const { addNewFormData } = counterSlice.actions;
export const selectFormsData = ({ data }) => data.formData;

export default counterSlice.reducer;
