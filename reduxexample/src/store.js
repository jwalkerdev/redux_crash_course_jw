import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// createStore() - Creates a Redux store that holds the complete state tree of your app.
// Arguments
// reducer (Function): A reducing function that returns the next state tree, given the current state tree and an action to handle.
// [preloadedState] (any): The initial state. You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session. If you produced reducer with combineReducers, this must be a plain object with the same shape as the keys passed to it. Otherwise, you are free to pass anything that your reducer can understand.
// [enhancer] (Function): The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc. The only store enhancer that ships with Redux is applyMiddleware().

// Ex. No reducers, empty store, no middleware yet
// const store = createStore(() => [], {}, applyMiddleware());

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(...middleware)
);

export default store;