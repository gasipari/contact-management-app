import React from "react";
import {connect} from "react-redux";
import Contact from "Contact";
import ContactEdit from "ContactEdit";
import {fetchContacts, addContact} from "actions";

export const ContactList = React.createClass({

    getInitialState() {
        return {
            isShowingModal: false
        };
    },
    componentDidMount() {
        // get employees
        this.props.dispatch(fetchContacts());
    },
    handleAdd: function () {
        this.setState({isShowingModal: true});
        this.props.dispatch(addContact());
    },
    handleClose: function () {
        this.setState({isShowingModal: false});
    },
    handleCloseUpdate: function () {
        this.setState({isShowingModal: false});
        this.fetchEmployees();
    },
    filterContacts: function (contacts, searchText) {
        let filteredContacts = contacts;
        // Filter by searchText
        filteredContacts = filteredContacts.filter((contact) => {
            let text = contact.name.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });
        return filteredContacts;
    },
    render: function () {
        const {contacts, searchText} = this.props.contacts;
        let renderContacts = () => {
            if (contacts.length === 0) {
                return (
                  <p className="container__message">There is currently no Employee</p>
                );
            }
            return this.filterContacts(contacts, searchText).map((contact) => {
                return (
                <Contact key={contact._id} contact={contact}/>
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

export default connect(
  (state) => {
      return {
          contacts: state.contacts
      };
  }
)(ContactList);
