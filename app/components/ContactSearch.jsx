import React from "react";
import ContactEdit from "ContactEdit";

const ContactSearch = React.createClass({
    getInitialState() {
        return {
            isShowingModal: false
        };
    },
    handleAdd: function () {
        this.setState({isShowingModal: true});
    },
    handleClose: function () {
        this.setState({isShowingModal: false});
    },
    render: function () {
        return (
      <div className="contact__search">
        <input type="search" ref="searchText" placeholder="Search Employee..."/>
        <button type="button" className="button">Search</button>
        <button className="secondary hollow button" onClick={this.handleAdd}
          data-tooltip aria-haspopup="true" data-hover-delay="100"
          title="Add new employee">
          <i className="fi-plus"></i></button>

            {
              this.state.isShowingModal &&
              <ContactEdit onClose={this.handleClose} />
            }
      </div>
    );
    }
});

module.exports = ContactSearch;
