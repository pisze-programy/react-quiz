/* When server-side will be ready - in utils we will need decode jwt token to get username */
// import jwtDecode from 'jwt-decode';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');

  let initialState = {
    isAuthenticated: false,
    token: null
  };

  if (token && Object.keys(token).length) {
    /* Here we need to check if token is still valid (exp) */
    initialState = {
      isAuthenticated: true,
    };

    // name: jwtDecode(token).username
  }

  return Object.assign({}, JSON.parse(token), initialState);
};

export default isAuthenticated;
