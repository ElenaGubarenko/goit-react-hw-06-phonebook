// import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
import Filter from '../Filter';
import ContactsList from '../ContactsList';
import ContactForm from '../ContactForm';
import Container from '../Container';
import { connect } from 'react-redux';
import actions from '../redux/actions/actions';

class PhoneBook extends Component {
  componentDidUpdate() {
    if (this.props.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
    }
  }

  componentDidMount() {
    const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localStorageContacts) {
      this.props.addToLocalStorage(localStorageContacts);
    }
  }

  render() {
    return (
      <Container>
        <ContactForm />
        <h1>Contacts</h1>
        <Filter />
        <ContactsList />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.toolkitContactsReducer,
  filter: state.toolkitFilterReducer,
});

const mapDispatchToProps = dispatch => ({
  addToLocalStorage: value => dispatch(actions.addLocalStorageContacts(value)),
  filterContacts: value => dispatch(actions.filterContacts(value)),
  setFilteredContactsEmpty: () => dispatch(actions.setFilteredContactsEmpty()),
  handleFilter: value => dispatch(actions.handleFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
