import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main, Login, SignUp, ItemInfo, MyPage, MyPageEdit, Callback } from './pages';
import Nav from './components/Nav';

function App () {
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
