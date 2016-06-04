import React from "react";
import ContactList from "ContactList";
import ContactSearch from "ContactSearch";

const ContactHome = () => {
    return (
  <div>
    <div className="colum small-centered medium-6 large-4">
    <ContactSearch />
    </div>
    <ContactList />
  </div>
);
};

module.exports = ContactHome;
