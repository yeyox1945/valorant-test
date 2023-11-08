
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6396aee2a68e43e41808fa18.mockapi.io/api'
    }),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], { page: string, limit: string }>({
            query: ({ page, limit }) => `/posts?sortBy=createdAt&order=desc&page=${page}&limit=${limit}`
        }),
        getPostById: builder.query<Post, string>({
            query: (id) => `/posts/${id}`
        })
    })
})

export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi;