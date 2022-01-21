import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main, Login, SignUp } from './pages';
import Nav from './components/Nav';

function App () {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
=======
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
>>>>>>> 6590b338f7bd5a785cfb95310822206908789329
  );
}

export default App;
