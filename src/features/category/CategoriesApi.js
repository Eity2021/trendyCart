import { apiSlice } from "../api/apiSlice";



export const categoryApi = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        getCategory:builder.query({
            query:() => '/category-tree'
  
        })
    })
});

export const {useGetCategoryQuery} = categoryApi;



