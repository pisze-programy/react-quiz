export const login = (payload) => {
  return {
    isAuthenticated: true,
    username: payload.username,
    id: 12321,
    score: Math.floor(Math.random() * (100000 - 1 + 1)) + 1,
    token: '000123-2332-xsd2---23'
  }
};
