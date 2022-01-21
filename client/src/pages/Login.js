import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { actionCreators } from '../store/store';
import { useDispatch } from 'react-redux';

const Login = () => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login } = actionCreators;

  const [inputInfo, setInputInfo] = useState({
    email: '',
    password: ''
  });

  const handleInput = (event) => {
    if (event.target.placeholder === 'Email') {
      setInputInfo({ ...inputInfo, email: event.target.value });
    }
    if (event.target.placeholder === 'password') {
      setInputInfo({ ...inputInfo, password: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    if (event.target.className === 'loginBtn') {
      // axios 성공시
      dispatch(login({ email: '', nickname: '' }));
    }
    if (event.target.className === 'githubBtn') {
      // axios
      dispatch(login({ email: '', nickname: '' }));
    }
    if (event.target.className === 'signup') {
      navigate('/signup');
    }
  };

  return (
    <div>
      <h3>Login</h3>
      <input type='email' placeholder='Email' onChange={handleInput} />
      <input type='password' placeholder='password' onChange={handleInput} />
      <button className='loginBtn' onClick={handleSubmit}>Login</button>
      <button className='githubBtn' onClick={handleSubmit}>Github</button>
      <button className='signup' onClick={handleSubmit}>SignUp</button>
    </div>
  );
};

export default Login;
