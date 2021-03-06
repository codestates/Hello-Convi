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
  height: 570px;
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

const FloatingText = styled.div`
  text-align: center;
  color: #C4C4C4;
  line-height: 40px;
`;

const LoginButton = styled.button`
    width: 80%;
    height: 2.5rem;
    border: none;
    border-radius: 10px;
    background-color: #34495E;
    color: #ffffff;
    font-weight: 700;
    font-size: 0.9em;
    transition: all 0.5s;
    &:hover,:focus {
      cursor: pointer;
      outline: none;
      transform: scale(1.05);
      background-color: #000;
    }
`;

const GithubButton = styled.button`
    width: 80%;
    height: 2.5rem;
    border: none;
    border-radius: 10px;
    background-color: #FEE521;    
    color: #ffffff;
    font-weight: 700;
    transition: all 0.5s;
    &:hover,:focus {
      cursor: pointer;
      outline: none;
      transform: scale(1.05);
    }
    .cacao {
      height: 2.45rem;
    }
`;

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
    console.log(event.target);
    if (event.target.className.includes('loginBtn')) {
      // axios ?????????
      axios.post('http://localhost:8080/login', { email: inputInfo.email, password: inputInfo.password }, config)
        .then(el => {
          dispatch(login({ oauth: false, userId: el.data.data.id, email: el.data.data.email, nickname: el.data.data.nickname }));
          navigate('/');
        });
      // axios ?????????
    }
    if (event.target.className.includes('githubBtn')) {
      window.location.assign('https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=da4e288805f2fb1fe0efa41cb629944f&redirect_uri=http://localhost:3000/callback');
    }
    if (event.target.className.includes('cacao')) {
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
        <button className='signup' onClick={handleSubmit}>?????? ????????? ?????????????</button>
        <LoginButton className='loginBtn' onClick={handleSubmit}>Login</LoginButton>
        <FloatingText>??????????????????   ??????   ??????????????????</FloatingText>
        <GithubButton className='githubBtn' onClick={handleSubmit}><img src='/images/kakao.png' alt='logo' className='cacao' onClick={handleSubmit} /></GithubButton>
      </LoginContainer>
    </LoginWrap>
  );
}
// client/public/images/kakao.png
export default Login;
