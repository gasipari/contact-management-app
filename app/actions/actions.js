import HttpService from "HttpService";
import ApiConfig from "ApiConfig";

// action generators
export let addContact = () => {
    return {
        type: "ADD_CONTACT"
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

export let startContactEdit = () => {
    return {
        type: "START_CONTACT_EDIT"
    };
};

export let completeContactEdit = (message) => {
    return {
        type: "COMPLETE_CONTACT_EDIT",
        message
    };
};

export let sendContactUpdate = (employee) => {
    return (dispatch) => {
        //dispatch(startContactEdit());
        HttpService.put(ApiConfig.employeeEndpoint + employee.id, employee, localStorage.token)
          .then(function(response) {
              dispatch(completeContactEdit(response));
              // reload data
              dispatch(fetchContacts());
          }, function(error) {
              console.log(error);
          });
    };
};
