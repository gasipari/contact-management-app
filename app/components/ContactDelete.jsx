import React from "react";
import {ModalContainer, ModalDialog} from "react-modal-dialog";
import HttpService from "HttpService";
import ApiConfig from "ApiConfig";

const ContactDelete = React.createClass({
    handleDelete: function () {
        let component = this;
        // delete employee
        HttpService.delete(ApiConfig.employeeEndpoint + this.props.contact._id,
        localStorage.token)
      .then(function(response) {
          console.log(response);
          component.props.onCloseUpdate();
      }, function(error) {
          console.log(error);
      });
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

module.exports = ContactDelete;
