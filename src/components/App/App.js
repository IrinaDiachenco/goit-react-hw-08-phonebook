import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import Container from '../Container/Container';
import HomeView from '../../views/HomeView/HomeView';
import RegisterView from '../../views/RegisterView/RegisterView';
import LoginView from '../../views/LoginView/LoginView';
import ContactsView from '../../views/ContactsView/ContactsView';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
  <Container>
    <AppBar />
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/register" component={RegisterView} />
      <Route path="/login" component={LoginView} />
      <Route path="/contacts" component={ContactsView} />
    </Switch>
</Container>
);
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

