export const logout = () => {
  return {
    isAuthenticated: false,
    username: null,
    score: null,
    token: null
  }
};
