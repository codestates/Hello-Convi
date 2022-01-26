import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { actionCreators } from '../store/store';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';


const LoginWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: whitesmoke;
`;
const LoginContainer = styled.div`
  width: 300px;
  height: 500px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid #F1F1F1;
  .img {
    height: 250px;
  }
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .signup {
    cursor: pointer;
    background-color: white;
    border: 0;
    outline: 0;
    font-size: 1em;
    color: #666;
    margin-bottom: 10px;
  }
  .signup:hover {
    color: #34495E;
  }
`;

const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 10px;
  text-align: center;
`;

const LoginInput = styled.input`
  border: 2px solid #F1F1F1;
  border-radius: 7px;
  height: 40px;
  width: 250px;
  font-size: 16px;
  margin-bottom: 3px;
`;

const LoginButton = styled.button`
    width: 100px;
    height: 2.5rem;
    border: none;
    border-radius: 10px;
    background-color: #9e9e9e;
    color: #ffffff;
    font-weight: 700;
    font-size: 1.1em;
    transition: all 0.5s;
    margin-right: 10px;
    &:hover,:focus {
      cursor: pointer;
      outline: none;
      transform: scale(1.05);
      background-color: #000;
    }
`;

const GithubButton = styled.button`
    width: 100px;
    height: 2.5rem;
    border: none;
    border-radius: 10px;
    background-image: url('/images/kakao.png');
    background-size: cover;
    background-color: #ffed2b;    
    color: #ffffff;
    font-weight: 700;
    font-size: 1.1em;
    transition: all 0.5s;
    margin-left: 10px;
    &:hover,:focus {
      cursor: pointer;
      outline: none;
      transform: scale(1.05);
      
    }
`;
// let count = 0;
// let isoauth = false
function Login () {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login } = actionCreators;

  const [inputInfo, setInputInfo] = useState({
    email: '',
    password: ''
  });

  const handleInput = (event) => {
    if (event.target.placeholder === 'email') {
      setInputInfo({ ...inputInfo, email: event.target.value });
    }
    if (event.target.placeholder === 'password') {
      setInputInfo({ ...inputInfo, password: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    if (event.target.className.includes('loginBtn')) {
      // axios 성공시
      axios.post('http://localhost:8080/login', { email: inputInfo.email, password: inputInfo.password }, config)
        .then(el => {
          console.log(el.data);
          dispatch(login({ userId: el.data.data.id, email: el.data.data.email, nickname: el.data.data.nickname }));
          navigate('/');
        });
      // axios 실패시
    }
    if (event.target.className.includes('githubBtn')) {
      window.location.assign('https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=da4e288805f2fb1fe0efa41cb629944f&redirect_uri=http://localhost:3000/callback');
    }
    if (event.target.className === 'signup') {
      navigate('/signup');
    }
  };

  return (
    <LoginWrap>
      <LoginContainer>
        <img src='/images/logo.png' alt='logo' className='img' />
        <InputWrap>
          <LoginInput type='email' placeholder='email' onChange={handleInput} />
          <LoginInput type='password' placeholder='password' onChange={handleInput} />
        </InputWrap>
        <br />
        <button className='signup' onClick={handleSubmit}>아직 계정이 없습니까?</button>
        <div>
          <LoginButton className='loginBtn' onClick={handleSubmit}>Login</LoginButton>
          <GithubButton className='githubBtn' onClick={handleSubmit}></GithubButton>
        </div>
      </LoginContainer>
    </LoginWrap>
  );
}
//client/public/images/kakao.png
export default Login;
