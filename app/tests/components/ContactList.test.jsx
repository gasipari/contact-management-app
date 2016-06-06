import React from "react";
import expect from "expect";
import TestUtils from "react-addons-test-utils";

import ContactList from "ContactList";
import Contact from "Contact";

describe("ContactList", () => {
    let contactList = TestUtils.renderIntoDocument(<ContactList/>);
    let contacts = [
    {_id:"1", name: "James Bond", position: "CEO", phone: "123-345-6789",
      email: "james.bond@abcd.com"},

    {id:"2", name: "Bill Gate", position: "Founder", phone: "123-345-6789",
      email: "james.bond@abcd.com"}
    ];

    beforeEach(function(){
        contactList.setState({contacts: contacts});
    });

    it("should exist", () => {
        expect(ContactList).toExist();
    });

    it("should render one Contact compoment for each contact item", () => {
        // Finds all instances of components with type of Contact class
        let contactComponents = TestUtils.scryRenderedComponentsWithType(contactList, Contact);

        expect(contactComponents.lenght).toBe(contacts.lenght);
    });
});
