import React from "react";


const ContactList = React.createClass({

    //
    getDefaultProps: function () {
        return {
            contacts: [
      {name: "James Bond", position: "CEO", phone: "123-345-6789", email: "james.bond@abcd.com"},
      {name: "Bill Gate", position: "Founder", phone: "123-345-6789", email: "james.bond@abcd.com"},
      {name: "James Bond", position: "CEO", phone: "123-345-6789", email: "james.bond@abcd.com"}
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
                <span key={contact.name}>{contact.name}</span>
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
