import HttpService from "HttpService";
import ApiConfig from "ApiConfig";

// action generators
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


export let startContactsFetch = () => {
    return {
        type: "START_CONTACTS_FETCH"
    };
};

export let completeContactsFetch = (contacts) => {
    return {
        type: "COMPLETE_CONTACTS_FETCH",
        contacts
    };
};

export let fetchContacts = () => {
    return (dispatch) => {
        dispatch(startContactsFetch());
        HttpService.get(ApiConfig.employeeEndpoint, localStorage.token)
          .then(function(response) {
              dispatch(completeContactsFetch(response));
          }, function(error) {
              console.log(error);
          });
    };
};
