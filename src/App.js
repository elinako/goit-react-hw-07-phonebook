import React from "react";
import Form from "./components/Form/Form";
import ContactList from "./components/ContactList/ContactList";
import SearchInput from "./components/SearchInput/SearchInput";
import Alert from "./components/Alert/Alert";
import { CSSTransition } from "react-transition-group";
import AlertAnimation from "./components/Alert/AlertAnimation.module.css";
import { connect } from "react-redux";
import styled from "styled-components";
import actionContacts from "./redux/contacts/actionsContacts";

const Container = styled.div`
  font-family: sans-serif;
  font-size: 16px;
`;

const App = ({ alert, alertNotification, length }) => {
  return (
    <Container>
      <Form />
      {length > 1 && <SearchInput />}
      <ContactList />
    </Container>
  );
};

const mapStateToProps = (state) => {
  const contacts = state.contacts.items.length;
  return {
    length: contacts,
  };
};

export default connect(mapStateToProps)(App);
