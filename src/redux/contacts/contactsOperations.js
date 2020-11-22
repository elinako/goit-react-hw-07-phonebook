import axios from "axios";
import actionContacts from "../contacts/actionsContacts";

axios.defaults.baseURL = "http://localhost:2000";

const addContact = (contact) => (dispatch) => {
  dispatch(actionContacts.addContactRequest());

  axios
    .post("/contacts", { ...contact })
    .then((response) =>
      dispatch(actionContacts.addContactSuccess(response.data))
    )
    .catch((error) => actionContacts.addContactError(error));
};

const fetchContacts = () => (dispatch) => {
  dispatch(actionContacts.fetchContactRequest());

  axios
    .get("/contacts")
    .then((response) =>
      dispatch(actionContacts.fetchContactSuccess(response.data))
    )
    .catch((error) => dispatch(actionContacts.fetchContactError(error)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(actionContacts.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actionContacts.deleteContactSuccess(id)))
    .catch((error) => actionContacts.deleteContactError(error));
};

export default { addContact, fetchContacts, deleteContact };
