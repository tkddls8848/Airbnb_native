import { configureStore } from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import rootReducer from "./rootReducer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'redux-persist/es/constants';

const persistedConfig = {
    key: "root",
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistedConfig, rootReducer);

const store =  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:  {
            ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE]
        }
    })
});

export const persisor = persistStore(store);

export default store;