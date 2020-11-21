import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const addContactRequest = createAction("contacts/addRequest");
const addContactSuccess = createAction("contacts/addSuccess");
const addContactError = createAction("contacts/addError");

const fetchContactRequest = createAction("contacts/fetchRequest");
const fetchContactSuccess = createAction("contacts/fetchSuccess");
const fetchContactError = createAction("contacts/fetchError");

const deleteContactRequest = createAction("contacts/deleteRequest");
const deleteContactSuccess = createAction("contacts/deleteSuccess");
const deleteContactError = createAction("contacts/deleteError");

const deleteContact = createAction("contacts/deleteContact");

const filterContacts = createAction("contacts/filter");

const showAlert = createAction("contacts/showAlert");

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactError,
  fetchContactRequest,
  fetchContactSuccess,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  deleteContact,
  filterContacts,
  showAlert,
};
