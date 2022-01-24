import { configureStore, createReducer, createAction } from '@reduxjs/toolkit';

const login = createAction('login');
const logout = createAction('logout');
const setCurItemInfo = createAction('setCurItemInfo');

const reducer = createReducer({
  userInfo: {
    auth: false,
    email: '',
    nickname: ''
  },
  curItemInfo: {
    itemid: '',
    itemname: '',
    price: '',
    score: '',
    photo: '',
    review: {
      nickname: '',
      content: '',
      score: '',
      createdAt: ''
    }
  }  
}, {
  [login]: (state, action) => {
    state.userInfo.auth = true;
    state.userInfo.email = action.payload.email;
    state.userInfo.nickname = action.payload.nickname;
  },
  [logout]: (state, action) => {
    state.userInfo.auth = false;
    state.userInfo.email = '';
    state.userInfo.nickname = '';
  },
  [setCurItemInfo]: (state, action) => {
    state.curItemInfo = action.payload;
  }
});

const store = configureStore({ reducer });

export const actionCreators = { login, logout, setCurItemInfo };

export default store;
