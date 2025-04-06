import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        getUser:builder.query({
            query:() => '/api/auth/profile'
  
        })
    })
});

export const {useGetUserQuery } = userApi;