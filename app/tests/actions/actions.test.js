import expect from "expect";
import {startContactsFetch, completeContactsFetch, startContactEdit, completeContactEdit,
  addContact, editContact,
  deleteContact} from "actions";


describe("Redux Actions", () => {
    describe("Contact Actions", () => {
        it("should generate startContactsFetch action", () => {
            let action = {
                type: "START_CONTACTS_FETCH"
            };
            // call the generator
            let response = startContactsFetch();

            expect(response).toEqual(action);
        });

        it("should generate completeContactsFetch action", () => {
            let action = {
                type: "COMPLETE_CONTACTS_FETCH",
                contacts: [{name: "james"}]
            };
            // call the generator
            let response = completeContactsFetch(action.contacts);

            expect(response).toEqual(action);
        });

        it("should generate startContactEdit action", () => {
            let action = {
                type: "START_CONTACT_EDIT"
            };
            // call the generator
            let response = startContactEdit();

            expect(response).toEqual(action);
        });

        it("should generate completeContactEdit action", () => {
            let action = {
                type: "COMPLETE_CONTACT_EDIT",
                message: {message: "contact saved"}
            };
            // call the generator
            let response = completeContactEdit(action.message);

            expect(response).toEqual(action);
        });


        it("should generate addContact action", () => {
            let action = {
                type: "ADD_CONTACT"
            };
            // call the generator
            let response = addContact();

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
});
