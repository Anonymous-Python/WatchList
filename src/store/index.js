import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = () =>{
    return createStore(composeWithDevTools());
}

export default store();