import React from "react";
import expect from "expect";
import TestUtils from "react-addons-test-utils";
import {Provider} from "react-redux";

import ConnectedContactList, {ContactList} from "ContactList";
import ConnectedContact from "Contact";
import {configure} from "configureStore";

describe("ContactList compoment", () => {
    it("should exist", () => {
        expect(ContactList).toExist();
    });

    it("should render one Contact compoment for each contact item", () => {
      //let contactList = TestUtils.renderIntoDocument(<ContactList/>);
        let contacts = [
          {_id:"1", name: "James Bond", position: "CEO", phone: "123-345-6789",
            email: "james.bond@abcd.com"},

          {_id:"2", name: "Bill Gate", position: "Founder", phone: "123-345-6789",
            email: "james.bond@abcd.com"}
        ];
        let store = configure({
            contacts: {
                contacts: contacts
            }
        });

        let provider = TestUtils.renderIntoDocument(
          <Provider store={store}>
            <ConnectedContactList />
          </Provider>
        );

        // // Finds all instances of components with type of ContactList (connected) class
        let contactList = TestUtils.scryRenderedComponentsWithType(provider,
          ConnectedContactList)[0];

        // Finds all instances of components with type of Contact class
        let contactComponents = TestUtils.scryRenderedComponentsWithType(contactList,
          ConnectedContact);

        expect(contactComponents.lenght).toBe(contacts.lenght);
    });
});
