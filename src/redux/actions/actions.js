// import types from '../actionTypes/actionTypes';
import { createAction } from '@reduxjs/toolkit';

const deleteContact = createAction('deleteContact');
const addLocalStorageContacts = createAction('addLocalStorageContacts');
const filterContacts = createAction('filterContacts');
const setFilteredContactsEmpty = createAction(
  'setFilteredContactsEmpty',
  () => ({
    payload: [],
  }),
);
const updateState = createAction('updateState');
const handleFilter = createAction('handleFilter');
const addContact = createAction('addContact');

// const deleteContact = id => ({
//   type: types.deleteContact,
//   payload: id,
// });

// const addLocalStorageContacts = value => ({
//   type: types.addLocalStorageContacts,
//   payload: value,
// });

// const filterContacts = value => ({
//   type: types.filterContacts,
//   payload: value,
// });

// const setFilteredContactsEmpty = () => ({
//   type: types.setFilteredContactsEmpty,
//   // payload: [],
// });

// const updateState = value => ({
//   type: types.updateState,
//   payload: value,
// });

// const handleFilter = value => ({
//   type: types.handleFilter,
//   payload: value,
// });

// const addContact = value => ({
//   type: types.addContact,
//   payload: value,
// });

export default {
  deleteContact,
  addLocalStorageContacts,
  filterContacts,
  setFilteredContactsEmpty,
  updateState,
  handleFilter,
  addContact,
};
