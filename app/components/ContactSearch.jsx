import React from "react";

const ContactSearch = React.createClass({
    render: function () {
        return (
      <div className="contact__search">
        <input type="search" ref="searchText" placeholder="Search Employee..."/>
        <button type="button" className="button">Search</button>
      </div>
    );
    }
});

module.exports = ContactSearch;
