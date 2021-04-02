import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import Container from '../Container/Container';
// import HomeView from '../../views/HomeView/HomeView';
// import RegisterView from '../../views/RegisterView/RegisterView';
// import LoginView from '../../views/LoginView/LoginView';
// import ContactsView from '../../views/ContactsView/ContactsView';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import PrivateRoute from '../Route/PrivatRoute';
import PublicRoute from '../Route/PublicRoute';
import Loader from 'react-loader-spinner';

const HomeView = lazy(() => import('../../views/HomeView/HomeView'));
const RegisterView = lazy(() => import('../../views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('../../views/LoginView/LoginView'));
const ContactsView = lazy(() => import('../../views/ContactsView/ContactsView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
  <Container>
  <AppBar />
    <Suspense fallback={<Loader />}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterView}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginView}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={ContactsView}
            />
          </Switch>
        </Suspense>
</Container>
);
}
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

