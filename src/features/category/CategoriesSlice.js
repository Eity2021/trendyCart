import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

const categorySlice = createSlice({
    name:'category',
    initialState,
    reducers:{
        // userInfo: (state, action) => {
        //     state.userInfo = action.payload;
        //   },
    }
})

export const {} = categorySlice.actions;
export default categorySlice.reducer;