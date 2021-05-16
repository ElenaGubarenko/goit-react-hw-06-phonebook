import { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import actions from '../redux/actions/actions';

class Filter extends Component {
  filterContactsByName = e => {
    this.props.handleFilter(e.target.value);

    if (this.props.filter !== '') {
      const result = this.props.contacts.filter(contact => {
        return contact.name
          .toLowerCase()
          .includes(this.props.filter.toLowerCase());
      });
      this.props.filterContacts(result);
      return;
    }
    this.props.setFilteredContactsEmpty();
  };

  render() {
    console.log(this.props);
    return (
      <div className={styles.FilterDiv}>
        <p className={styles.FindTitle}>Find contacts by name</p>
        <input
          onChange={this.filterContactsByName}
          value={this.props.filter}
          name="filter"
          required
        />
      </div>
    );
  }
}

Filter.propTypes = {
  filterContactsByName: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
};

const mapStateToProps = state => ({
  contacts: state.contacts,
  filter: state.filter,
  filteredContacts: state.filtredContacts,
});

const mapDispatchToProps = dispatch => ({
  filterContacts: value => dispatch(actions.filterContacts(value)),
  setFilteredContactsEmpty: () => dispatch(actions.setFilteredContactsEmpty()),
  handleFilter: value => dispatch(actions.handleFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
