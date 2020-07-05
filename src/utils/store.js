import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import counter from '../reducers/counter';
import pokemonListReducer from '../reducers/pokemonListReducer';
import common from '../reducers/common';

const rootReducer = combineReducers({
    counter,
    pokemonListReducer,
    common
});
const loggerMiddleware = createLogger();
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

export default store;