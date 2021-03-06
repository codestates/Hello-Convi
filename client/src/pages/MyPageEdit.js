import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../store/store';
import axios from 'axios';
import styled from 'styled-components';

const MyPageEditWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: whitesmoke;
`;

const MyPageEditContainer = styled.div`
  width: 300px;
  height: 500px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid #F1F1F1;
  img {
    height: 200px;
  }
`;

const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 10px;
  text-align: center;
  span {
    font-size: 8px;
    color: red;
    margin-bottom: 2px;
  }
  span.green {
    color: green;
  }
`;

const MyPageEditInput = styled.input`
  border: 2px solid #F1F1F1;
  border-radius: 7px;
  height: 40px;
  width: 250px;
  font-size: 16px;
`;

const ModifyButton = styled.button`
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

function MyPageEdit () {
  const navigate = useNavigate();
  const userInfo = useSelector(state => state.userInfo);
  const dispatch = useDispatch();
  const { setUserInfo } = actionCreators;

  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };

  const [inputInfo, setInputInfo] = useState({
    nickname: '',
    password: ''
  });

  const [checkText, setCheckText] = useState({
    nickname: '',
    password: '',
    submit: ''
  });

  const regNickname = /^[???-??????-??????-???a-zA-Z0-9]{2,10}$/;

  const handleInput = (event) => {
    if (event.target.placeholder === 'nickname') {
      setInputInfo({ ...inputInfo, nickname: event.target.value });
    }
    if (event.target.placeholder === 'password') {
      setInputInfo({ ...inputInfo, password: event.target.value });
    }
  };

  const handleOnBlur = (event) => {
    if (event.target.placeholder === 'nickname') {
      if (regNickname.test(event.target.value)) {
        axios
          .post('http://localhost:8080/check', { nickname: inputInfo.nickname }, config)
          .then((res) => {
            if (res.data.message === 'nickname available!') {
              setCheckText({ ...checkText, nickname: '?????? ????????? ????????? ?????????.' });
            } else {
              setCheckText({ ...checkText, nickname: '????????? ????????? ?????????.' });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        setCheckText({ ...checkText, nickname: '???????????? 2~10?????? ????????? ??????????????????.' });
      }
    }
    if (event.target.placeholder === 'password') {
      axios
        .post('http://localhost:8080/check', { password: inputInfo.password }, config)
        .then(res => {
          setCheckText({ ...checkText, password: '?????????????????????.' });
        }).catch(err => {
          console.log(err);
          setCheckText({ ...checkText, password: '????????? ???????????? ?????????.' });
        });
    }

    // ??? if ?????? ??????
    // axios ?????????
    // axios ?????????
    // ??? ????????? ?????? ??????
  };

  const handleModify = () => {
    if (checkText.nickname === '?????? ????????? ????????? ?????????.' &&
    checkText.password === '?????????????????????.') {
      axios.patch('http://localhost:8080/user', inputInfo, config).then((res) => {
        // ?????????????????? ???????????????
        console.log({ [setUserInfo]: '!' });
        dispatch(setUserInfo({ nickname: inputInfo.nickname }));
        navigate('/mypage');
      }).catch(err => {
        setCheckText({ ...checkText, submit: '?????? ?????? ??????' });
        console.log(err);
      });
    } else {
      setCheckText({ ...checkText, submit: '??????????????? ?????? ???????????? ??????????????????.' });
    }
  };

  return (
    <MyPageEditWrap>
      <MyPageEditContainer>
        <img src='/images/logo.png' alt='logo' />
        <InputWrap>
          <MyPageEditInput type='email' placeholder={userInfo.email} disabled />
          <MyPageEditInput type='text' placeholder='nickname' onChange={handleInput} onBlur={handleOnBlur} />
          {checkText.nickname === '?????? ????????? ????????? ?????????.'
            ? (
              <span className='green'>{checkText.nickname}</span>
              )
            : (
              <span>{checkText.nickname}</span>
              )}
          <MyPageEditInput type='password' placeholder='password' onChange={handleInput} onBlur={handleOnBlur} />
          {checkText.password === '?????????????????????.'
            ? (
              <span className='green'>{checkText.password}</span>
              )
            : (
              <span>{checkText.password}</span>
              )}
        </InputWrap>
        <br />
        <div>
          <ModifyButton className='modifyBtn' onClick={handleModify}>??????</ModifyButton>
          <span style={{ color: 'red' }}>{checkText.submit}</span>
        </div>
      </MyPageEditContainer>
    </MyPageEditWrap>
  );
}

export default MyPageEdit;
