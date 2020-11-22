import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ListItemAnimation from "./ListItemAnimation.module.css";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelector from "../../redux/contacts/contactsSelector";

const ListItem = styled.li`
  box-shadow: 3px 3px 5px -1px rgba(134, 133, 245, 0.77);
  padding: 40px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
`;

const Button = styled.button`
  border: 1px solid #4a86e0;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  height: 30px;
  &:hover {
    border: 1px solid #f3491b;
    background-color: #f3491b;
    color: #fff;
  }
`;

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <TransitionGroup>
        {contacts.map(({ id, name, number }) => (
          <CSSTransition key={id} timeout={250} classNames={ListItemAnimation}>
            <ListItem key={id}>
              {name} : {number}
              <Button onClick={() => onDeleteContact(id)}>delete</Button>
            </ListItem>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

const mapStateToProps = (state) => ({
  contacts: contactsSelector.getVisibleContacts(state),
});

const mapDispatchToProps = {
  onDeleteContact: contactsOperations.deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.defaultProps = {
  name: "Name Surname",
  number: "000-00-00",
};
ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
