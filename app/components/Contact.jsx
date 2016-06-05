import React from "react";


const Contact = React.createClass({
    render: function () {
        const {name, position, phone, email} = this.props;
        return (
      <div className="contact">
        <span className="contact">{name}</span>
        <span className="contact">{position}</span>
        <span className="contact">{phone}</span>
        <span className="contact">{email}</span>
      </div>
    );
    }
});

module.exports = Contact;
