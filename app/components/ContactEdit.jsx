import React from "react";
import {ModalContainer, ModalDialog} from "react-modal-dialog";


const ContactEdit = React.createClass({

    //
    componentDidMount(){
        if (this.props.contact) {
            this.name.value = this.props.contact.name;
            this.position.value = this.props.contact.position;
            this.phone.value = this.props.contact.phone;
            this.email.value = this.props.contact.email;
        }
    },
    handleFormSubmit: function (e) {
        e.preventDefault();
    },
    render: function () {
        return (
<div>
  <ModalContainer onClose={this.props.onClose}>
  <ModalDialog onClose={this.props.onClose} style={{width: "50%"}}>
    <h3>Edit contact</h3>
    <form onSubmit={this.handleFormSubmit}>
      <div className="row">
        <div className="small-3 columns">
          <label htmlFor="name" className="text-right middle">Name</label>
        </div>
        <div className="small-9 columns">
          <input type="text" id="name" ref={(ref) => this.name = ref}
            placeholder="Enter a name.." required/>
        </div>
      </div>
      <div className="row">
        <div className="small-3 columns">
          <label htmlFor="position" className="text-right middle">Job title</label>
        </div>
        <div className="small-9 columns">
          <input type="text" id="position" ref={(ref) => this.position = ref}
            placeholder="Enter a job title.." required/>
        </div>
      </div>
      <div className="row">
        <div className="small-3 columns">
          <label htmlFor="phone" className="text-right middle">Phone</label>
        </div>
        <div className="small-9 columns">
          <input type="text" id="phone" ref={(ref) => this.phone = ref}
            placeholder="Enter a name.." required/>
        </div>
      </div>
      <div className="row">
        <div className="small-3 columns">
          <label htmlFor="email" className="text-right middle">Email</label>
        </div>
        <div className="small-9 columns">
          <input type="email" id="email" ref={(ref) => this.email = ref}
            placeholder="Enter an email.." required/>
        </div>
      </div>
      <div className="contact__edit__controls">
        <button type="reset" className="button secondary hollow"
          onClick={this.props.onClose}>Cancel</button>
        <button type="submit" className="button primary">Save</button>
      </div>
    </form>
  </ModalDialog>
</ModalContainer>
</div>
    );
    }
});

module.exports = ContactEdit;
