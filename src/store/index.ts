import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { rootSaga } from "./sagas";
import { createRootReducer } from "./reducers";
import { IStoreState } from "./state";

export const configureAppStore = (initialState?: IStoreState) => {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  const store = configureStore({
    reducer: createRootReducer(),
    middleware: [sagaMiddleware],
  });
  sagaMiddleware.run(rootSaga);
  store.subscribe(() => store.getState());
  return store;
};

export const store = configureAppStore();
