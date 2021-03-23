import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './ContactList.module.css';
import { connect } from 'react-redux';
//import { deleteContact } from '../../redux/contact-actions';
import { deleteContact } from '../../redux/contact/contact-operations';
import selectors from '../../redux/contact/contact-selectors';

//class ContactList extends Component {
const ContactList = ({ contacts, onRemove }) => {
  // static propTypes = {
  //   items: PropTypes.array.isRequired,
  //   onRemove: PropTypes.func.isRequired
  // };

  //render() {
    //const { items, onRemove } = this.props;
    return (
      <>
        <TransitionGroup component="ul" className={styles.list}>
          {contacts.map(({ name, phone, id }) => {
            return (
              <CSSTransition
                key={id}
                classNames={styles}
                timeout={300}
                unmountOnExit
              >
                <li key={id}>
                  {name}: {phone} <button className={styles.button} id={id} onClick={() => onRemove(id)}>x</button>
                </li>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </>
    );
  }


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      phone: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
  onRemove: PropTypes.func.isRequired,
};

// const getVisibleContacts = (contacts, filter) => {
//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(filter.toLowerCase()),
//   );
// };

const mapStateToProps = state => ({
  //const { items, filter } = state.contacts;

  // const visibleContacts = contactSelectors.getVisibleContacts(state);
  // if (visibleContacts.length > 0) {
  //   return { items: visibleContacts };
  // }
  // if (visibleContacts.length === 0) {
  //   return { items: null };
  // }

  // return { items: contactSelectors.getAllContacts(state) };
  // return {
  //   items: visibleContacts.length > 0 ? visibleContacts : items,
  // };

  contacts: selectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(deleteContact(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);