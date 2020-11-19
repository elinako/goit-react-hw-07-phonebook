import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actionContacts from "../contacts/actionsContacts";

const onAddContact = (state, action) => [...state, action.payload];

const onDeleteContact = (state, action) =>
  state.filter((contact) => contact.id !== action.payload);

const itemsReducer = createReducer([], {
  [actionContacts.addContactSuccess]: onAddContact,
  [actionContacts.deleteContact]: onDeleteContact,
});

const filterReducer = createReducer("", {
  [actionContacts.filterContacts]: (state, action) => action.payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
