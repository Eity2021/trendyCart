import { apiSlice } from "../api/apiSlice";



export const categoryApi = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        getCategory:builder.query({
            query:() => '/api/categories/categoriesList'
  
        })
    })
});

export const {useGetCategoryQuery} = categoryApi;



