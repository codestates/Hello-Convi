import { configureStore, createReducer, createAction } from '@reduxjs/toolkit';

const login = createAction('login');
const logout = createAction('logout');
const setCurItemInfo = createAction('setCurItemInfo');
const setUserInfo = createAction('setUserInfo');

const reducer = createReducer({
  userInfo: {
    auth: false,
    oauth: false,
    email: '',
    userId: '',
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
      createdAt: '',
      updatedAt: ''
    }
  }
}, {
  [login]: (state, action) => {
    state.userInfo.auth = true;
    state.userInfo.oauth = action.payload.oauth;
    state.userInfo.email = action.payload.email;
    state.userInfo.userId = action.payload.userId;
    state.userInfo.nickname = action.payload.nickname;
  },
  [logout]: (state, action) => {
    state.userInfo.auth = false;
    state.userInfo.oauth = false;
    state.userInfo.email = '';
    state.userInfo.nickname = '';
  },
  [setCurItemInfo]: (state, action) => {
    state.curItemInfo = action.payload;
  },
  [setUserInfo]: (state, action) => {
    state.userInfo.nickname = action.payload.nickname;
  }
});

const store = configureStore({ reducer });

export const actionCreators = { login, logout, setCurItemInfo, setUserInfo };

export default store;
