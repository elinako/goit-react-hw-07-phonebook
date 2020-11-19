import axios from "axios";
import actionContacts from "../contacts/actionsContacts";

const addContact = (contact) => (dispatch) => {
  dispatch(actionContacts.addContactRequest());

  axios
    .post("http://localhost:2000/contacts", { contact })
    .then((response) =>
      dispatch(actionContacts.addContactSuccess(response.data))
    )
    .catch((error) => actionContacts.addContactError(error));
};

export default { addContact };
