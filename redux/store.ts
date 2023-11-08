
import { configureStore } from '@reduxjs/toolkit';
import { valorantApi } from './api/playersApi';

import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { postsApi } from './api/postsApi';
import postsSlice from './features/postsSlice';


export const store = configureStore({
    reducer: {
        [valorantApi.reducerPath]: valorantApi.reducer,
        [postsApi.reducerPath]: postsApi.reducer,
        posts: postsSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([valorantApi.middleware, postsApi.middleware]),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch