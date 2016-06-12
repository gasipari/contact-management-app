// reducers
export let contactsReducer = (state = {isFetching: false, contacts: [],
  contact:{}, message:{}}, action) => {
    switch (action.type) {
    case "START_CONTACTS_FETCH":
        return {
            isFetching: true,
            contacts: []
        };
    case "COMPLETE_CONTACTS_FETCH":
        return {
            isFetching: false,
            contacts: action.contacts
        };
    case "START_CONTACT_EDIT":
        return {
            ...state,
            isFetching: true,
            message: {message: "start Contact Edit"}
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
            message: {message: "start Contact Add"}
        };
    case "COMPLETE_CONTACT_ADD":
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
    default:
        return state;
    }
};
