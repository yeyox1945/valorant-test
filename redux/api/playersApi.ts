
import { LeaderboardResponse } from '@/app/models/leaderboardResponse'
import { MatchesResponse } from '@/app/models/matchesFromPlayerResponse'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const valorantApi = createApi({
    reducerPath: 'valorantApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.henrikdev.xyz/valorant'
    }),
    endpoints: (builder) => ({
        getLeaderboard: builder.query<LeaderboardResponse, null>({
            query: () => '/v2/leaderboard/na'
        }),
        getRecentMatches: builder.query<MatchesResponse, { playerName: string, tag: string }>({
            query: ({ playerName, tag }) => `/v3/matches/na/${playerName}/${tag}`
        })
    })
})

export const { useGetLeaderboardQuery, useGetRecentMatchesQuery } = valorantApi;