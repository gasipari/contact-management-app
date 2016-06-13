// reducers
export let contactsReducer = (state = {isFetching: false, contacts: [],
  contact:{}, message:{}, searchText:""}, action) => {
    switch (action.type) {
    case "START_CONTACTS_FETCH":
        return {
            isFetching: true,
            contacts: []
        };
    case "COMPLETE_CONTACTS_FETCH":
        return {
            isFetching: false,
            searchText: "",
            contacts: action.contacts
        };
    case "START_CONTACT_EDIT":
        return {
            ...state,
            isFetching: true,
            message: {message: "start Editing Contact"}
        };
    case "COMPLETE_CONTACT_EDIT":
        return {
            ...state,
            isFetching: false,
            message: action.message
        };
    case "START_CONTACT_ADD":
        return {
            ...state,
            isFetching: true,
            message: {message: "start Adding Contact"}
        };
    case "COMPLETE_CONTACT_ADD":
        return {
            ...state,
            isFetching: false,
            message: action.message
        };
    case "START_CONTACT_DELETE":
        return {
            ...state,
            isFetching: true,
            message: {message: "start Deleting Contact"}
        };
    case "COMPLETE_CONTACT_DELETE":
        return {
            ...state,
            isFetching: false,
            message: action.message
        };
    case "EDIT_CONTACT":
        return {
            ...state,
            contact: action.contact
        };
    case "DELETE_CONTACT":
        return {
            ...state,
            contact: action.contact
        };
    case "ADD_CONTACT":
        return {
            ...state,
            contact: {
                id: "",
                name: "",
                position: "",
                phone: "",
                email: ""
            }
        };
    case "SET_SEARCH_TEXT":
        return {
            ...state,
            searchText:action.searchText
        };
    default:
        return state;
    }
};
