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

export let deleteContact = (contact) => {
    return {
        type: "DELETE_CONTACT",
        contact
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

// action creators that return a function instead of an action >> redux-thunk
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

// action creators that return a function instead of an action >> redux-thunk
export let sendContactUpdate = (employee) => {
    return (dispatch) => {
        dispatch(startContactEdit());
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

export let startContactAdd = () => {
    return {
        type: "START_CONTACT_ADD"
    };
};

export let completeContactAdd = (message) => {
    return {
        type: "COMPLETE_CONTACT_ADD",
        message
    };
};

// action creators that return a function instead of an action >> redux-thunk
export let sendContactAdd = (employee) => {
    return (dispatch) => {
        dispatch(startContactAdd());
        HttpService.post(ApiConfig.employeeEndpoint, employee, localStorage.token)
          .then(function(response) {
              dispatch(completeContactAdd(response));
              // reload data
              dispatch(fetchContacts());
          }, function(error) {
              console.log(error);
          });
    };
};

export let startContactDelete = () => {
    return {
        type: "START_CONTACT_DELETE"
    };
};

export let completeContactDelete = (message) => {
    return {
        type: "COMPLETE_CONTACT_DELETE",
        message
    };
};

// action creators that return a function instead of an action >> redux-thunk
export let sendContactDelete = (employeeId) => {
    return (dispatch) => {
        dispatch(startContactDelete());
        HttpService.delete(ApiConfig.employeeEndpoint + employeeId, localStorage.token)
          .then(function(response) {
              dispatch(completeContactDelete(response));
              // reload data
              dispatch(fetchContacts());
          }, function(error) {
              console.log(error);
          });
    };
};

export let setSearchText = (searchText) => {
    return {
        type: "SET_SEARCH_TEXT",
        searchText
    };
};
