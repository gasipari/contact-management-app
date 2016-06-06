import React from "react";

const ContactSearch = React.createClass({
    handleSearch: function () {
        //let searchText = this.refs.searchText.value;
        alert("This feature is currently under construction");
    },
    render: function () {
        return (
      <div className="contact__search">
        <input type="search" ref="searchText" placeholder="Search Employee..."/>
        <button type="button" className="button" onClick={this.handleSearch}>Search</button>
      </div>
    );
    }
});

module.exports = ContactSearch;
