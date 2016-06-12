import expect from "expect";
import {contactsReducer} from "reducers";
// make sure the reducer does not modify the object passed thru
import df from "deep-freeze-strict";


describe("Redux Reducers", () => {
    describe("contactsReducer", () => {
        it("should start fetching contacts", () => {
            let action = {
                type: "START_CONTACTS_FETCH"
            };
            let result = contactsReducer(df({}), df(action));

            expect(result.isFetching).toEqual(true);
        });

        it("should complete fetching contacts", () => {
            let contacts = [{name: "james"}];
            let action = {
                type: "COMPLETE_CONTACTS_FETCH",
                contacts
            };
            let result = contactsReducer(df({}), df(action));

            expect(result.isFetching).toEqual(false);
            expect(result.contacts).toEqual(contacts);
        });

        it("should edit current contact item", () => {
            let contact = {name: "james"};
            let action = {
                type: "EDIT_CONTACT",
                contact
            };
            let result = contactsReducer(df({}), df(action));

            expect(result.contact).toEqual(contact);
        });

        it("should start updating contact", () => {
            let action = {
                type: "START_CONTACT_EDIT"
            };
            let result = contactsReducer(df({}), df(action));

            expect(result.isFetching).toEqual(true);
        });

        it("should complete updating contact", () => {
            let message = {message: "contact has been updated"};
            let action = {
                type: "COMPLETE_CONTACT_EDIT",
                message
            };
            let result = contactsReducer(df({}), df(action));

            expect(result.isFetching).toEqual(false);
            expect(result.message).toEqual(message);
        });

        it("should start adding contact", () => {
            let action = {
                type: "START_CONTACT_ADD"
            };
            let result = contactsReducer(df({}), df(action));

            expect(result.isFetching).toEqual(true);
        });

        it("should complete adding contact", () => {
            let message = {message: "contact has been added"};
            let action = {
                type: "COMPLETE_CONTACT_ADD",
                message
            };
            let result = contactsReducer(df({}), df(action));

            expect(result.isFetching).toEqual(false);
            expect(result.message).toEqual(message);
        });

        it("should start deleting contact", () => {
            let action = {
                type: "START_CONTACT_DELETE"
            };
            let result = contactsReducer(df({}), df(action));

            expect(result.isFetching).toEqual(true);
        });

        it("should complete deleting contact", () => {
            let message = {message: "contact has been deleted"};
            let action = {
                type: "COMPLETE_CONTACT_DELETE",
                message
            };
            let result = contactsReducer(df({}), df(action));

            expect(result.isFetching).toEqual(false);
            expect(result.message).toEqual(message);
        });

        it("should add new contact item", () => {
            let contact = {
                id: "",
                name: "",
                position: "",
                phone: "",
                email: ""
            };
            let action = {
                type: "ADD_CONTACT",
                contact
            };
            let result = contactsReducer(df({}), df(action));

            expect(result.contact).toEqual(contact);
        });
    });
});
