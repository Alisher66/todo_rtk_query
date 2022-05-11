import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const goodsApi = createApi({
        reducerPath: 'goodsApi',
        tagTypes: ['Post'],
        baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
        endpoints: (build) => ({
            getGoods: build.query({
                query: (limit = 5) => ({
                    url: 'goods',
                    method: 'GET',
                    params: {
                        _limit: limit
                    }
                }),
                providesTags: result => ['Post']
            }),
            addNewPost: build.mutation({
                query: (post) => ({
                    url: 'goods',
                    method: "POST",
                    body: post,
                    name: post
                }),
                invalidatesTags: ['Post']
            }),
            deletePost: build.mutation({
                query: (id) => ({
                    url: `goods/${id}`,
                    method: "DELETE",
                }),
                invalidatesTags: ['Post']
            })
        }),
    }
)

export const {useGetGoodsQuery, useAddNewPostMutation, useDeletePostMutation} = goodsApi;