import { createStore, compose, combineReducers, applyMiddleware} from "redux";
import {contactsReducer} from "reducers";

// middleware that allows to write action creators that return a function instead of an action
import thunk from "redux-thunk";


export let configure = (initialState = {}) => {
    let reducer = combineReducers({
        contacts: contactsReducer
    });

    let store = createStore(reducer, initialState,
  compose(applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f));// (f = {return f;})
  // window.devToolsExtension allows us to debug redux using Chrome's Redux DevTools
    return store;
};
