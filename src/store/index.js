import { createStore, applyMiddleware } from 'redux';
// import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);

export default { store }; //persistStore
