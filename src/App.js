import React, { Component } from "react";
import Form from "./components/Form/Form";
import ContactList from "./components/ContactList/ContactList";
import SearchInput from "./components/SearchInput/SearchInput";
import { connect } from "react-redux";
import styled from "styled-components";
import contactsOperations from "./redux/contacts/contactsOperations";

const Container = styled.div`
  font-family: sans-serif;
  font-size: 16px;
`;

class App extends Component {
  componentDidMount = () => {
    this.props.onFetchContacts();
  };

  render() {
    return (
      <Container>
        <Form />
        {this.props.length > 1 && <SearchInput />}
        <ContactList />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const contacts = state.contacts.items.length;
  return {
    length: contacts,
  };
};

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
