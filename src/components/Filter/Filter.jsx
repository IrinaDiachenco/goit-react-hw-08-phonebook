import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contact/contact-actions';
import selectors from '../../redux/contact/contact-selectors';

function Filter({ value = '', onChange }) {
  return (
    <input
      className={styles.input}
      type='text'
      value={value}
      onChange={onChange}
      placeholder='Enter name for Search'
    />
  )
};

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
// };

const mapStateToProps = state => ({
  value: selectors.getFilter(state),
  contacts: selectors.getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);