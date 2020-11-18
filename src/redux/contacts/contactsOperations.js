import axios from "axios";
import actionContacts from "../contacts/actionsContacts";

const addContact = ({ name, number }) => (dispatch) => {
  dispatch(actionContacts.addContactRequest());

  axios
    .post("http://localhost:2000/contacts", { name, number })
    .then(
      (response) => console.log(response.data),
      dispatch(actionContacts.addContactSuccess())
    )
    .catch((error) => actionContacts.addContactError(error));
};

export default { addContact };
