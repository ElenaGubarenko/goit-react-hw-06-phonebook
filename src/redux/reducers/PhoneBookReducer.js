import { combineReducers } from 'redux';
import types from '../actionTypes/actionTypes';
// import deleteContact from '../actions/actions';

const contactsReducer = (
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // filter: '',
    // filtredContacts: [],
  },
  action,
) => {
  switch (action.type) {
    case types.deleteContact:
      return {
        // ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload,
        ),
      };
    case types.addLocalStorageContacts:
      return {
        contacts: action.payload,
      };
    default:
      return state;
  }
};

// const addLocalStorageContacts = ()

const rootPhoneBookReducer = combineReducers({
  contactsReducer: contactsReducer,
});

export default rootPhoneBookReducer;
