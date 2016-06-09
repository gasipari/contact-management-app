import { createStore, compose, combineReducers} from "redux";
import {contactsReducer} from "reducers";


export let configure = () => {
    let reducer = combineReducers({
        contacts: contactsReducer
    });

    let store = createStore(reducer,
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f));// (f = {return f;})
};
