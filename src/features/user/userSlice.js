import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    user:null
};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        // setUser: (state, action) => {
        //     state.userInfo = action.payload;
        //   },
    }
})

// export const { setUser } = userSlice.actions;
export default userSlice.reducer;