import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from './store/store';
import { Cookies } from 'react-cookie';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main, Login, SignUp, ItemInfo, MyPage, MyPageEdit, Callback } from './pages';
import Nav from './components/Nav';

function App () {
  const cookies = new Cookies();
  // const userInfo = useSelector(state => state.userInfo);
  const dispatch = useDispatch();
  const { login } = actionCreators;

  useEffect(() => {
    // axios
    // 로그인이 되어있으면

    const userId = cookies.get('id');
    const nickname = cookies.get('nickname');
    const email = cookies.get('email');
    const oauth = cookies.get('oauth'); // false
    console.log(oauth);

    // const userid = 1;
    // const nickname = 2;
    // const email = 3;
    // const oauth = false;
    console.log(userId);
    if (oauth && userId) dispatch(login({ userId: JSON.parse(userId), nickname, email, oauth: JSON.parse(oauth) }));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/iteminfo' element={<ItemInfo />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/mypage/edit' element={<MyPageEdit />} />
          <Route path='/callback' element={<Callback />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
