import axios from 'axios';
import {
  addContactSuccess,
  deleteContactSuccess,
  fetchContactsSuccess,
  addContactRequest,
  deleteContactRequest,
  fetchContactsRequest,
  addContactError,
  deleteContactError,
  fetchContactsError,
} from './contact-actions';
axios.defaults.baseURL = 'http://localhost:3000';

export const fetchContacts = () => dispatch => {
    dispatch(fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

export const addContact = ({name, phone}) => dispatch => {
  const contact = {
    name,
    phone,
  };
  dispatch(addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};

// const operations = { fetchContacts, addContact, deleteContact };

// export default operations;

// export default { fetchContacts, addContact, deleteContact };