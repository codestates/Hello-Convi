import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
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

  const regNickname = /^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9]{2,10}$/;

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
              setCheckText({ ...checkText, nickname: '사용 가능한 닉네임 입니다.' });
            } else {
              setCheckText({ ...checkText, nickname: '중복된 닉네임 입니다.' });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        setCheckText({ ...checkText, nickname: '닉네임은 2~10글자 사이로 입력해주세요.' });
      }
    }
    if (event.target.placeholder === 'password') {
      axios
        .post('http://localhost:8080/check', { password: inputInfo.password }, config)
        .then(res => {
          setCheckText({ ...checkText, password: '확인되었습니다.' });
        }).catch(err => {
          console.log(err);
          setCheckText({ ...checkText, password: '잘못된 패스워드 입니다.' });
        });
    }

    // 두 if 경우 모두
    // axios 성공시
    // axios 실패시
    // 로 나눠서 미리 짜기
  };

  const handleModify = () => {
    if (checkText.nickname === '사용 가능한 닉네임 입니다.' &&
    checkText.password === '확인되었습니다.') {
      axios.patch('http://localhost:8080/user', inputInfo, config).then((res) => {
        // 마이페이지로 리다이렉트
        navigate('/mypage');
      }).catch(err => {
        setCheckText({ ...checkText, submit: '알수 없는 오류' });
        console.log(err);
      });
    } else {
      setCheckText({ ...checkText, submit: '입력사항을 모두 올바르게 입력해주세요.' });
    }
  };

  return (
    <MyPageEditWrap>
      <MyPageEditContainer>
        <img src='/images/logo.png' alt='logo' />
        <InputWrap>
          <MyPageEditInput type='email' placeholder={userInfo.email} disabled />
          <MyPageEditInput type='text' placeholder='nickname' onChange={handleInput} onBlur={handleOnBlur} />
          {checkText.nickname === '사용 가능한 닉네임 입니다.'
            ? (
              <span className='green'>{checkText.nickname}</span>
              )
            : (
              <span>{checkText.nickname}</span>
              )}
          <MyPageEditInput type='password' placeholder='password' onChange={handleInput} onBlur={handleOnBlur} />
          {checkText.password === '확인되었습니다.'
            ? (
              <span className='green'>{checkText.password}</span>
              )
            : (
              <span>{checkText.password}</span>
              )}
        </InputWrap>
        <br />
        <div>
          <ModifyButton className='modifyBtn' onClick={handleModify}>수정</ModifyButton>
          <span style={{ color: 'red' }}>{checkText.submit}</span>
        </div>
      </MyPageEditContainer>
    </MyPageEditWrap>
  );
}

export default MyPageEdit;
