import { apiSlice } from "../api/apiSlice";



export const  productsApi  = apiSlice.injectEndpoints({
    endpoints:(builder) =>({
        getProducts:builder.query({
            query:() => `/products?page=1&perPage=10&sort=createdAtDesc`
        })
    }
)
})


export const {
    useGetProductsQuery
} = productsApi;