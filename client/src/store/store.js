import { configureStore, createReducer, createAction } from '@reduxjs/toolkit';

<<<<<<< HEAD
const login = createAction('login'); // type , payload
=======
const login = createAction('login');
>>>>>>> 51db5576f5a51747cf1da45ba7148eda732553eb
const logout = createAction('logout');

const reducer = createReducer({
  userInfo: {
    auth: false,
    email: '',
    nickname: ''
  }
}, {
  [login]: (state, action) => {
    return {
      auth: true,
      email: action.payload.email,
      nickname: action.payload.nickname
    };
  },
  [logout]: (state, action) => {
    return {
      auth: false,
<<<<<<< HEAD
      email: '',
      nickname: ''
=======
      userInfo: {
        auth: false,
        email: '',
        nickname: ''
      }
>>>>>>> 51db5576f5a51747cf1da45ba7148eda732553eb
    };
  }
});

const store = configureStore({ reducer });

export const actionCreators = { login, logout };

export default store;
