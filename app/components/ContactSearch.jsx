import React from "react";


const ContactSearch = React.createClass({
    render: function () {
        return (
      <div className="contact__search">
        <input type="search" ref="searchText" placeholder="Search Employee..."/>
      </div>
    );
    }
});

module.exports = ContactSearch;
