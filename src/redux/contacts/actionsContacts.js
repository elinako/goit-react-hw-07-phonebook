import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const addContactRequest = createAction("contacts/addRequest");
const addContactSuccess = createAction("contacts/addSuccess");
const addContactError = createAction("contacts/addError");

const deleteContact = createAction("contacts/deleteContact");

const filterContacts = createAction("contacts/filter");

const showAlert = createAction("contacts/showAlert");

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContact,
  filterContacts,
  showAlert,
};
