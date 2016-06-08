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


export let editContact = (contact) => {
    return {
        type: "EDIT_CONTACT",
        contact
    };
};


export let deleteContact = (id) => {
    return {
        type: "DELETE_CONTACT",
        id
    };
};
