import { createStore, applyMiddleware, compose, Store } from 'redux';
import { persistStore } from 'redux-persist';
import { rootReducer } from 'redux/modules';
import rootSaga from 'redux/sagas';
import sagaMiddleware from 'redux/middleware/sagas';

export default () => {
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const store: Store = createStore(rootReducer, compose(...enhancers));
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};
