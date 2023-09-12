import store from "./config";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
