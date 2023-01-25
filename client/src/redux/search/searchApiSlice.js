

import {apiSlice} from "../apiSlice";

export const searchApiSlice = apiSlice.injectEndpoints({
    endpoints: build=>({
        search: build.mutation({
            query: body=>({
                url:'/search',
                method:'POST',
                body
            })
        }),

    })
})

export const {useSearchMutation} = searchApiSlice