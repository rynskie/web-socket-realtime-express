import { configureStore } from "@reduxjs/toolkit"
import persistedReducer from "./rootReducer"

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})