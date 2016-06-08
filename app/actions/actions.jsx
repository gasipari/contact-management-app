// action generators
export let getContacts = () => {
    return {
        type: "GET_CONTACTS"
    };
};

export let addContact = (contact) => {
    return {
        type: "ADD_CONTACT",
        contact
    };
};
