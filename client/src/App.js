import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main, Login, SignUp, ItemInfo, MyPage } from './pages';
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
