import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import genre from './genre';
import watchList from './watchList';


let reducers = combineReducers({ genre, watchList });

const store = () =>{
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();