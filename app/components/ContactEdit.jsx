import React from "react";
import {ModalContainer, ModalDialog} from "react-modal-dialog";
import HttpService from "HttpService";
import ApiConfig from "ApiConfig";

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
        // grab employee info
        let employee = {};
        employee.name = this.name.value;
        employee.position = this.position.value;
        employee.phone = this.phone.value;
        employee.email = this.email.value;

        let component = this;
        if (this.props.contact) {
          // update employee
            HttpService.put(ApiConfig.employeeEndpoint + this.props.contact._id,
             employee, localStorage.token)
          .then(function(response) {
              console.log(response);
              component.props.onCloseUpdate();
          }, function(error) {
              console.log(error);
          });
        } else {
            // create new employee
            HttpService.post(ApiConfig.employeeEndpoint,
             employee, localStorage.token)
          .then(function(response) {
              console.log(response);
              component.props.onCloseUpdate();
          }, function(error) {
              console.log(error);
          });
        }
    },
    render: function () {
        let renderTitle = () => {
            if (this.props.contact) {
                return (<h4>Edit employee</h4>);
            } else {
                return (<h4>Add new employee</h4>);
            }
        };
        return (
<div>
  <ModalContainer onClose={this.props.onClose}>
  <ModalDialog onClose={this.props.onClose} style={{width: "50%"}}>
    {renderTitle()}
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
