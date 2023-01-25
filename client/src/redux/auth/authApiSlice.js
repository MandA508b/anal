import {apiSlice} from "../apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: build=>({
        login: build.mutation({
            query: credentials=>({
                url:'/user/login',
                method:'POST',
                body:{...credentials}
            })
        }),
        registration: build.mutation({
            query: body=>({
                url: "/user/registration",
                method:"POST",
                body
            }),
            invalidatesTags:['User']
        }),
        logout: build.mutation({
            query:()=> ({
                url:'/user/logout',
                method:'POST'
            })
        }),
        rename: build.mutation({
            query:body=>({
                url:'/user/rename',
                method:'PUT',
                body
            })
        }),
        changePassword: build.mutation({
            query:body=>({
                url:'/user/changePassword',
                method:'PUT',
                body
            })
        }),

    })
})

export const {useLoginMutation, useLogoutMutation, useRegistrationMutation, useRenameMutation, useChangePasswordMutation} = authApiSlice