import { createSlice } from "@reduxjs/toolkit";
import lang from "./languageContants";

const configSlice = createSlice({
  name: "consfig",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const{changeLanguage} = configSlice.actions;
export default configSlice.reducer;
