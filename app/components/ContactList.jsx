import React from "react";
import Contact from "Contact";
import ContactEdit from "ContactEdit";
import HttpService from "HttpService";
import ApiConfig from "ApiConfig";

const ContactList = React.createClass({

    getInitialState() {
        return {
            isShowingModal: false,
            contacts: []
        };
    },
    handleAdd: function () {
        this.setState({isShowingModal: true});
    },
    handleClose: function () {
        this.setState({isShowingModal: false});
    },
    handleCloseUpdate: function () {
        this.setState({isShowingModal: false});
        this.fetchEmployees();
    },
    //
    fetchEmployees: function () {
        let component = this;
        HttpService.get(ApiConfig.employeeEndpoint, localStorage.token)
          .then(function(response) {
              component.setState({
                  contacts: response
              });
              //console.log(response);
          }, function(error) {
              console.log(error);
          });
    },
    componentDidMount() {
        // get employees
        this.fetchEmployees();
    },
    render: function () {
        const {contacts} = this.state;
        let renderContacts = () => {
            if (contacts.length === 0) {
                return (
                  <p className="container__message">There is currently no Employee</p>
                );
            }
            return contacts.map((contact) => {
                return (
                <Contact key={contact._id} contact={contact} onUpdate={this.fetchEmployees}/>
                );
            });
        };
        return (
      <div className="container">
        <div className="container__controls">
          <button className="secondary hollow button" onClick={this.handleAdd}
            data-tooltip aria-haspopup="true" data-hover-delay="100"
            title="Add new employee">
            <i className="fi-plus"></i></button>
        </div>
        {
          this.state.isShowingModal &&
          <ContactEdit onClose={this.handleClose} onCloseUpdate={this.handleCloseUpdate}/>
        }
        {renderContacts()}
      </div>
    );
    }
});

module.exports = ContactList;
