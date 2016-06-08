import expect from "expect";
import {getContacts, addContact} from "actions";


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
});
