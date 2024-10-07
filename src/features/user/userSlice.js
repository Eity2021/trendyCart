import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        // userInfo: (state, action) => {
        //     state.userInfo = action.payload;
        //   },
    }
})

// export const {} = userSlice.actions;
export default userSlice.reducer;