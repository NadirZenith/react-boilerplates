// simple implementation
// import { createStore } from 'redux';
// import reducer from './reducer';
//
// export default function configureStore(initialState) {
//   return createStore(reducer, initialState);
// }

// // midleware implementation
// import { createStore, applyMiddleware } from 'redux';
// import reducer from './reducer';
//
// const createStoreWithMiddleware = applyMiddleware()(createStore);// the midleware implementation
//
// export default function configureStore(initialState) {
//   return createStoreWithMiddleware(reducer, initialState);
// }


// add first midleware
//import { createStore, applyMiddleware } from 'redux';

import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/index';
// import { createLogger } from 'redux-logger';

// const logger = createLogger(); // the first midleware
// const createStoreWithMiddleware = applyMiddleware(logger)(createStore); // add the midleware

const createStoreWithMiddleware = applyMiddleware()(createStore); // no midleware

// https://github.com/zalmoxisus/redux-devtools-extension#usage
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducers, initialState, composeEnhancers());

  // return createStore(reducers, {}, composeEnhancers()
    // composeEnhancers(applyMiddleware(...middleware))
    // applyMiddleware(logger)
  // )
}
