import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    headermenu: false,
};

const headerSlice = createSlice({
    name: "header",
    initialState,
    reducers: {
        headermenuHandler: (state, action) => {
            state.headermenu = action.payload;
        },
    },
});

export const { headermenuHandler } = headerSlice.actions;
export default  headerSlice.reducer;