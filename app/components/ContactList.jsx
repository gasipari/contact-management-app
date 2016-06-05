import React from "react";
import Contact from "Contact";

const ContactList = React.createClass({

    //
    getDefaultProps: function () {
        return {
            contacts: [
    {id:"11", name: "James Bond", position: "CEO", phone: "123-345-6789",
      email: "james.bond@abcd.com"},
    {id:"12", name: "Bill Gate", position: "Founder", phone: "123-345-6789",
      email: "james.bond@abcd.com"},
    {id:"13", name: "James Bond", position: "CEO", phone: "123-345-6789",
      email: "james.bond@abcd.com"}
            ]
        };
    },
    render: function () {
        const {contacts} = this.props;
        let renderContacts = () => {
            if (contacts.length === 0) {
                return (
                  <p className="container__message">There is currently no Employee</p>
                );
            }
            return contacts.map((contact) => {
                return (
                <Contact key={contact.id}
                  name={contact.name} position={contact.position}
                  phone={contact.phone} email={contact.email}/>
                );
            });
        };
        return (
      <div className="container">
        {renderContacts()}
      </div>
    );
    }
});

module.exports = ContactList;
