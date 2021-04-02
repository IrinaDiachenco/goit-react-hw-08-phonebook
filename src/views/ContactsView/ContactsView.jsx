import React, { Component } from 'react';
//import Container from '../../components/Container/Container';
import { connect } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
//import { CSSTransition } from 'react-transition-group';
import styles from './ContactView.module.css';
import Loader from '../../components/Loader/Loader';
import selectors from '../../redux/contact/contact-selectors';
import { fetchContacts } from '../../redux/contact/contact-operations';
import Slide from '@material-ui/core/Slide';

class ContactView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <>
        
      {this.props.isLoading && <Loader />}
      <div className={styles.container}>
          <Slide direction="right" in={true} timeout={300} mountOnEnter unmountOnExit>
            <h1 className={styles.tittle}>Phonebook</h1>
            </Slide>

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
  // contacts: selectors.getAllContacts(state),
  isLoading: selectors.getLoading(state),
});

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(fetchContacts()),
// });

const mapDispatchToProps = {
  fetchContacts: fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactView);



