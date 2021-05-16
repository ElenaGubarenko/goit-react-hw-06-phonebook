import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';
import { connect } from 'react-redux';
import actions from '../redux/actions/actions';

class ContactsList extends Component {
  render() {
    console.log(this.props);
    return (
      <ul className={styles.ContactsList}>
        {(this.props.filter !== ''
          ? this.props.filteredContacts
          : this.props.contacts
        ).map(contact => {
          return (
            <li className={styles.ContactListItem} key={uuidv4()}>
              {contact.name}: {contact.number}
              <button
                className={styles.Delete}
                onClick={() => this.props.deleteContact(contact.id)}
                type="button"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

// ContactsList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   deleteContact: PropTypes.func,
// };

const mapStateToProps = state => ({
  contacts: state.contacts,
  filter: state.filter,
  filteredContacts: state.filtredContacts,
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

// rootPhoneBookReducer.contactsReducer;
