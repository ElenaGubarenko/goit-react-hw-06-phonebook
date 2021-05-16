// import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
import Filter from '../Filter';
import ContactsList from '../ContactsList';
import ContactForm from '../ContactForm';
import Container from '../Container';
import { connect } from 'react-redux';
import actions from '../redux/actions/actions';

class PhoneBook extends Component {
  // state = {
  //   filter: '',
  // };

  componentDidUpdate() {
    console.log('hi1');
    if (this.props.contacts) {
      console.log('hi2');
      localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
    }
  }

  componentDidMount() {
    // console.log('hi1');
    // if (this.props.contacts) {
    //   console.log('hi2');
    //   localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
    // }

    const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localStorageContacts) {
      this.props.addToLocalStorage(localStorageContacts);
    }
  }

  // handleState = e => {
  //   const { value } = e.target;
  //   this.props.handleFilter(value);
  // };

  // filterContactsByName = e => {
  //   this.handleState(e);

  //   if (this.props.filter !== '') {
  //     const result = this.props.contacts.filter(contact => {
  //       return contact.name
  //         .toLowerCase()
  //         .includes(this.props.filter.toLowerCase());
  //     });
  //     this.props.filterContacts(result);
  //     return;
  //   }
  //   this.props.setFilteredContactsEmpty();
  // };

  // updateState = data => {
  //   this.setState({
  //     contacts: data,
  //   });
  // };

  render() {
    // console.log(this.props);
    return (
      <Container>
        <ContactForm
        // updateState={this.updateState}
        // handleChangeInState={this.handleChangeInState}
        // addContact={this.addContact}
        />
        <h1>Contacts</h1>
        <Filter
        // filterContactsByName={this.filterContactsByName}
        // name="filter"
        // value={this.state.filter}
        />
        <ContactsList
        // filtredContacts={this.state.filtredContacts}
        // contacts={
        //   this.state.filter !== ''
        //     ? this.state.filteredContacts
        //     : this.state.contacts
        // }
        // deleteContact={this.props.deleteContact}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  addToLocalStorage: value => dispatch(actions.addLocalStorageContacts(value)),
  filterContacts: value => dispatch(actions.filterContacts(value)),
  setFilteredContactsEmpty: () => dispatch(actions.setFilteredContactsEmpty()),
  handleFilter: value => dispatch(actions.handleFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
