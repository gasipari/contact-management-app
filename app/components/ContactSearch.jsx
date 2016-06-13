import React from "react";
import {connect} from "react-redux";
import {setSearchText} from "actions";

const ContactSearch = React.createClass({
    render: function () {
        const {dispatch} = this.props;
        return (
      <div className="contact__search">
        <input type="search" ref="searchText" placeholder="Search Employee..."
          onChange={() => {
              let searchText = this.refs.searchText.value;
              dispatch(setSearchText(searchText));
          }}/>
      </div>
    );
    }
});

export default connect(
  (state) => {
      return {
          searchText: state.searchText
      };
  }
)(ContactSearch);
