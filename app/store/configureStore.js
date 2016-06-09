import { createStore, compose, combineReducers, applyMiddleware} from "redux";
import {contactsReducer} from "reducers";
import thunk from "redux-thunk";


export let configure = () => {
    let reducer = combineReducers({
        contacts: contactsReducer
    });

    let store = createStore(reducer,
  compose(applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f));// (f = {return f;})

    return store;
};
