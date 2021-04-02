import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import styles from './RegisterView.module.css';
import Slide from '@material-ui/core/Slide';

// const styles = {
//   form: {
//     width: 320,
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginBottom: 15,
//   },
// };

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={styles.container}>
        <Slide direction="right" in={true} timeout={300} mountOnEnter unmountOnExit>
          <h1 className={styles.tittle}>Check in</h1>
          </Slide>

        <form
          onSubmit={this.handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <label className={styles.label}>
            Name
             
          </label>
          <input  className={styles.input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />

          <label className={styles.label}>
            Mail
             
          </label>
          <input  className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />

          <label className={styles.label}>
            Password
             
          </label>
          <input className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />

          <button className={styles.button} type="submit">Register</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);

