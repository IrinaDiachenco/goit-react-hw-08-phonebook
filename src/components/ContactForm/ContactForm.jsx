import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { CSSTransition } from 'react-transition-group';
import styles from './ContactForm.module.css';
//import errorStyles from '../ErrorMessage/ErrorMessage.module.css';
//import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contact/contact-operations';
import selectors from '../../redux/contact/contact-selectors';
import Alert from '@material-ui/lab/Alert';
import Slide from '@material-ui/core/Slide';

class ContactForm extends Component {
    static propTypes = {
    onAdd: PropTypes.func.isRequired,
  };

    state = {
        name: "",
        number: "",
        error: null,
    };

    handleChangeForm = ({target}) => {
        const { name, value } = target
        this.setState({ [name]: value })
    };

    handleFormSubmit = (e) => {
        e.preventDefault()

        const { name, number } = this.state;
        const { onAdd } = this.props;
        const isValidateForm = this.validateForm()

        if (!isValidateForm)
            onAdd(name, number)
            this.resetForm()    
    };

    validateForm = () => {
        const { name, number } = this.state;
        
        const { contacts } = this.props;  
        //const isExistContact = !!items.find((contacts) => contacts.name.toLowerCase() === name.toLowerCase());
        const isExistContact = !!contacts.find((items) => items.name.toLowerCase() === name.toLowerCase());
        //console.log('items', items);
        
        if (!name || !number) {
            this.setState({ error: 'Some filed is empty' });
            return setTimeout(() => {
        this.setState({ error: null });
            }, 2000);
            
        }
        if (isExistContact) {
            this.setState({ error: 'Contact is already exist' });
            return setTimeout(() => {
        this.setState({ error: null });
      }, 2000);
        }
        
    } 

    resetForm = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number, error } = this.state;
        
        return (
            <>
                <Slide direction="left" in={error !== null} timeout={300} >
                    <div className={styles.alert}>
                        <Alert severity="warning">{error}</Alert>
                        </div>
                    </Slide>
            <form className={styles.form} onSubmit={this.handleFormSubmit}>
                <label className={styles.label}>name</label>
                <input className={styles.input} type="text" name="name" placeholder="Enter name" value={name} onChange={this.handleChangeForm} />
                    
                <label className={styles.label}>number</label>
                <input className={styles.input} type="tel" name="number" placeholder="Enter number number" value={number} onChange={this.handleChangeForm} /> 
                    
                <button className={styles.button} type='submit'>Add Contact</button>   
               
                </form>
            {/* <CSSTransition
            appear={true}
            in={error !== null}
            timeout={250}
            classNames={errorStyles}
            unmountOnExit   
            >
            <ErrorMessage message={error} />
        </CSSTransition> */}
                
           </>
        )
    }
}

const mapStateToProps = (state) => ({
        contacts: selectors.getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
    onAdd: (name, number) =>
        dispatch(addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);