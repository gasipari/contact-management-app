// reducers
export let contactsReducer = (state = {isFetching: false, contacts: []}, action) => {
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
    default:
        return state;
    }
};
