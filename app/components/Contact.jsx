import React from "react";
import ContactEdit from "ContactEdit";

const Contact = React.createClass({

    getInitialState() {
        return {
            isShowingModal: false
        };
    },
    handleEdit: function (e) {
        console.log("Edit employee ID: " + e.target.parentElement.id);
        this.setState({isShowingModal: true});
    },
    handleDelete: function (e) {
        console.log("Delete employee ID: " + e.target.parentElement.id);
    },
    handleClose: function () {
        this.setState({isShowingModal: false});
    },
    render: function () {
        const {contact} = this.props;
        return (
    <div>
      <div className="contact">
        <span>{contact.name}</span>
        <span>{contact.position}</span>
        <span>{contact.phone}</span>
        <span>{contact.email}</span>
        <div className="contact__actions" id={contact.id}>
          <i className="fi-pencil" onClick={this.handleEdit}></i>
          <i className="fi-trash" onClick={this.handleDelete}></i>
        </div>
      </div>

      {
        this.state.isShowingModal &&
        <ContactEdit onClose={this.handleClose} contact={contact}/>
      }
    </div>
    );
    }
});

module.exports = Contact;
