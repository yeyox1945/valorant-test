
import { configureStore } from '@reduxjs/toolkit';
import { valorantApi } from './api/playersApi';

import { setupListeners } from '@reduxjs/toolkit/dist/query';


export const store = configureStore({
    reducer: {
        [valorantApi.reducerPath]: valorantApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([valorantApi.middleware]),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch