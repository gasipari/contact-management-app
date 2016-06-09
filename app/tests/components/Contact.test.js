import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import TestUtils from "react-addons-test-utils";

import Contact from "Contact";

describe("Contact component", () => {

    it("should exist", () => {
        expect(Contact).toExist();
    });

    it("should render all properties of contact object", () => {
        let contactObj = {
            _id:"1", name: "James Bond", position: "CEO", phone: "123-345-6789",
            email: "james.bond@abcd.com"
        };
        let contact = TestUtils.renderIntoDocument(<Contact contact={contactObj}/>);
        var $el = $(ReactDOM.findDOMNode(contact));
        var nameText = $el.find("div span:first-child").text();
        var positionText = $el.find("div span:nth-child(2)").text();
        var phoneText = $el.find("div span:nth-child(3)").text();
        var emailText = $el.find("div span:nth-child(4)").text();

        // verify contact attributes
        expect(nameText).toBe(contactObj.name);
        expect(positionText).toBe(contactObj.position);
        expect(phoneText).toBe(contactObj.phone);
        expect(emailText).toBe(contactObj.email);
    });
});
