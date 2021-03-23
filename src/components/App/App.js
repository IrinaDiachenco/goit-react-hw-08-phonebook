import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { CSSTransition } from 'react-transition-group';
import styles from './App.module.css';
import Loader from '../Loader/Loader';
import selectors from '../../redux/contact/contact-selectors';
import { fetchContacts } from '../../redux/contact/contact-operations';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
    <>
      {this.props.isLoading && <Loader />}
      <div className={styles.container}>
        <CSSTransition
          in={true}
          appear={true}
          classNames={styles}
          timeout={500}
          unmountOnExit
        >
          <h2 className={styles.tittle}>Phonebook</h2>
        </CSSTransition>

        <ContactForm />
        <div className={styles.filter}>
          <h2>find contact</h2>
          <Filter />
        </div>
        <ContactList />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: selectors.getAllContacts(state),
  isLoading: selectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);



