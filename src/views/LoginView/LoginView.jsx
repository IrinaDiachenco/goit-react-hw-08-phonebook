import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import styles from './LoginView.module.css';
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

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={styles.container}>
        <Slide direction="right" in={true} timeout={300} mountOnEnter unmountOnExit>
          <h1 className={styles.tittle}>Log in</h1>
          </Slide>

        <form
          onSubmit={this.handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
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
          <input  className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />

          <button className={styles.button} type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);