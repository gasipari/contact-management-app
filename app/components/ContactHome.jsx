import React from "react";
import ContactList from "ContactList";
import ContactSearch from "ContactSearch";

const ContactHome = () => {
    return (
  <div>
    <div className="colum small-centered medium-8 large-6">
    <ContactSearch />
    </div>
    <ContactList />
  </div>
);
};

module.exports = ContactHome;
