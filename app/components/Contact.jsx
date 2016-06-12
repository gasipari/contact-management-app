import React from "react";
import ContactEdit from "ContactEdit";
import ContactDelete from "ContactDelete";
import {connect} from "react-redux";
import {editContact, deleteContact} from "actions";

export const Contact = React.createClass({

    getInitialState() {
        return {
            isShowingModal: false,
            isShowingModalDelete: false
        };
    },
    handleEdit: function (e) {
        console.log("Edit employee ID: " + e.target.parentElement.id);
        this.setState({isShowingModal: true});
        this.props.dispatch(editContact(this.props.contact));
    },
    handleDelete: function (e) {
        console.log("Delete employee ID: " + e.target.parentElement.id);
        this.setState({isShowingModalDelete: true});
        this.props.dispatch(deleteContact(this.props.contact));
    },
    handleClose: function () {
        this.setState({
            isShowingModal: false,
            isShowingModalDelete: false
        });
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
        <div className="contact__actions" id={contact._id}>
          <i className="fi-pencil" onClick={this.handleEdit}></i>
          <i className="fi-trash" onClick={this.handleDelete}></i>
        </div>
      </div>
      {// edit modal
        this.state.isShowingModal &&
        <ContactEdit onClose={this.handleClose}/>
      }
      {// delete modal
        this.state.isShowingModalDelete &&
        <ContactDelete onClose={this.handleClose}/>
      }
    </div>
    );
    }
});
export default connect()(Contact);
