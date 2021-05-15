import types from '../actionTypes/actionTypes';

const deleteContact = id => ({
  type: types.deleteContact,
  payload: id,
});

const addLocalStorageContacts = value => ({
  type: types.addLocalStorageContacts,
  payload: value,
});

export default { deleteContact, addLocalStorageContacts };
