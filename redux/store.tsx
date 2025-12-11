// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../features/rootSlice"; // Import your root reducer
import { setupListeners } from "@reduxjs/toolkit/query";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userApi } from "../services/userApi";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // Only the 'counter' slice will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware().concat(userApi.middleware),
  });

const store = makeStore();
setupListeners(store.dispatch);
const persist = persistStore(store);
export { store, persist };
