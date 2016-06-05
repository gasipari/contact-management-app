import React from "react";


const Contact = React.createClass({
    render: function () {
        const {name, position, phone, email} = this.props;
        return (
    <div>
      <div className="contact">
        <span>{name}</span>
        <span>{position}</span>
        <span>{phone}</span>
        <span>{email}</span>
        <div className="contact__actions">
          <i className="fi-pencil"></i>
          <i className="fi-trash"></i>
        </div>
      </div>

    </div>
    );
    }
});

module.exports = Contact;
