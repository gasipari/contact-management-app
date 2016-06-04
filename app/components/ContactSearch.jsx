import React from "react";


const ContactSearch = React.createClass({
    render: function () {
        return (
      <div>
        <input type="search" ref="searchText" placeholder="Search Employee..." value=""/>
      </div>
    );
    }
});

module.exports = ContactSearch;
