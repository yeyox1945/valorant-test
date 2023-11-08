import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchQuery: '',
    page: 1,
    isLastPage: false,
}

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        searchPosts: (state, action) => {
            state.searchQuery = action.payload
        },
        loadNextPage: (state, action) => {
            state.page = action.payload
        }
    }
})

export default postsSlice.reducer;
export const { searchPosts, loadNextPage } = postsSlice.actions;