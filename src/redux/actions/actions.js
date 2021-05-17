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

export default {
  deleteContact,
  addLocalStorageContacts,
  filterContacts,
  setFilteredContactsEmpty,
  updateState,
  handleFilter,
  addContact,
};
