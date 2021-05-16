import types from '../actionTypes/actionTypes';

const deleteContact = id => ({
  type: types.deleteContact,
  payload: id,
});

const addLocalStorageContacts = value => ({
  type: types.addLocalStorageContacts,
  payload: value,
});

const filterContacts = value => ({
  type: types.filterContacts,
  payload: value,
});

const setFilteredContactsEmpty = () => ({
  type: types.setFilteredContactsEmpty,
  payload: [],
});

const updateState = value => ({
  type: types.updateState,
  payload: value,
});

const handleFilter = value => ({
  type: types.handleFilter,
  payload: value,
});

const addContact = value => ({
  type: types.addContact,
  payload: value,
});

export default {
  deleteContact,
  addLocalStorageContacts,
  filterContacts,
  setFilteredContactsEmpty,
  updateState,
  handleFilter,
  addContact,
};
