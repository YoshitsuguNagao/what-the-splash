import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import rootSaga from "../sagas/index";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__(),
      )
      : sagaMiddleware.run(rootSaga),
  );
  sagaMiddleware.run(rootSaga);
  // store.dispatch({ type: "HELLO" });
  // store.dispatch({ type: "LOGIN" });
  return store;
};

export default configureStore;
