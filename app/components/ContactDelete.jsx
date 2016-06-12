import React from "react";
import {ModalContainer, ModalDialog} from "react-modal-dialog";
import {connect} from "react-redux";
import {sendContactDelete} from "actions";

export const ContactDelete = React.createClass({
    handleDelete: function () {
        // delete employee
        this.props.dispatch(sendContactDelete(this.props.contact._id));
    },
    render: function () {
        return (
<div>
  <ModalContainer onClose={this.props.onClose}>
  <ModalDialog onClose={this.props.onClose} style={{width: "50%"}}>
    <h4>Delete employee</h4>
    <p>Are you sure you want to delete {this.props.contact.name} ?</p>
      <div className="contact__edit__controls">
        <button className="button secondary hollow"
          onClick={this.props.onClose}>Cancel</button>
        <button className="button primary" onClick={this.handleDelete}>Delete</button>
      </div>
  </ModalDialog>
</ModalContainer>
</div>
    );
    }
});

export default connect(
  (state) => {
      return {
          contact: state.contacts.contact
      };
  }
)(ContactDelete);
