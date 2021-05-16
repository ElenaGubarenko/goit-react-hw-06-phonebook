// import { combineReducers } from 'redux';
import types from '../actionTypes/actionTypes';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filtredContacts: [],
  filter: '',
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.deleteContact:
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload,
        ),
      };
    case types.addLocalStorageContacts:
      return {
        contacts: action.payload,
      };
    case types.filterContacts:
      return {
        filteredContacts: action.payload,
      };
    case types.setFilteredContactsEmpty:
      return {
        filteredContacts: action.payload,
      };
    case types.handleFilter:
      return {
        filter: action.payload,
      };
    case types.default:
      return state;
    case types.addContact:
      return {
        contacts: action.payload,
      };
    default:
      return state;
  }
};

export default contactsReducer;
