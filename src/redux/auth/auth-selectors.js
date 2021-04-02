// const getIsAuthenticated = state => Boolean(state.auth.token);
const getIsAuthenticated = state => state.auth.isAuthenticated;
const getUsername = state => state.auth.user.name;
const getError = state => state.auth.error;
const getToken = state => state.auth.token;

const authSelectors = {
  getIsAuthenticated,
  getUsername,
  getError,
  getToken
};

export default authSelectors;