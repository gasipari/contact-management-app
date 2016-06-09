import expect from "expect";
import {getContacts, addContact, editContact, deleteContact} from "actions";


describe("Redux Actions", () => {
    it("should generate getContacts action", () => {
        let action = {
            type: "GET_CONTACTS"
        };
        // call the generator
        let response = getContacts();

        expect(response).toEqual(action);
    });

    it("should generate addContact action", () => {
        let action = {
            type: "ADD_CONTACT",
            contact: {name: "james"}
        };
        // call the generator
        let response = addContact(action.contact);

        expect(response).toEqual(action);
    });

    it("should generate editContact action", () => {
        let action = {
            type: "EDIT_CONTACT",
            contact: {name: "james"}
        };
        // call the generator
        let response = editContact(action.contact);

        expect(response).toEqual(action);
    });

    it("should generate deleteContact action", () => {
        let action = {
            type: "DELETE_CONTACT",
            id: "999"
        };
        // call the generator
        let response = deleteContact(action.id);

        expect(response).toEqual(action);
    });
});
