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
    });
});
