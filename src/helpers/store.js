import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
//import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
 
export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware 
    )
);
 