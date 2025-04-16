import { apiSlice } from "../api/apiSlice";

export const  productsApi  = apiSlice.injectEndpoints({
    endpoints:(builder) =>({
        getProducts:builder.query({
            query:() => `/api/product/filterProducts?page=1&limit=40`
        })
    }
)
})


export const {
    useGetProductsQuery
} = productsApi;