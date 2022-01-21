<<<<<<< HEAD
import { useEffect, useState } from 'react';
=======
import { useState, useEffect } from 'react';
>>>>>>> 6590b338f7bd5a785cfb95310822206908789329
import axios from 'axios';

function SignUp () {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const [inputInfo, setInputInfo] = useState({
    email: '',
    nickname: '',
    password: '',
    passwordCheck: ''
  });

<<<<<<< HEAD
  const [checkText, setCehckText] = useState({
=======
  const [checkText, setCheckText] = useState({
>>>>>>> 6590b338f7bd5a785cfb95310822206908789329
    email: '',
    nickname: '',
    password: '',
    passwordCheck: ''
  });

  const regEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  const regPw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,15}$/;
<<<<<<< HEAD
  const regN = /^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9]{2,10}$/;

  const handleInput = (event) => {
    if (event.target.placeholder === 'Email') {
=======
  const regNickname = /^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9]{2,10}$/;

  const handleInput = (event) => {
    if (event.target.placeholder === 'email') {
>>>>>>> 6590b338f7bd5a785cfb95310822206908789329
      setInputInfo({ ...inputInfo, email: event.target.value });
    }
    if (event.target.placeholder === 'nickname') {
      setInputInfo({ ...inputInfo, nickname: event.target.value });
    }
    if (event.target.placeholder === 'password') {
      setInputInfo({ ...inputInfo, password: event.target.value });
    }
    if (event.target.placeholder === 'password check') {
      setInputInfo({ ...inputInfo, passwordCheck: event.target.value });
    }
  };

  const handleOnBlur = (event) => {
<<<<<<< HEAD
    // if(event.target.placeholder === 'Email') {
    //     if(regEmail.test(event.target.value)) {
    //         axios
    //           .post('',{inputInfo.email}, config)
    //           .then((res) => {
    //               if(res.data.message === 'ok') {
    //                 setCehckText({ ...checkText, email : '사용 가능한 이메일입니다.'})
    //               } else {
    //                 setCehckText({ ...checkText, email : '중복된 이메일입니다.'})
    //               }
    //           })
    //          .catch((err) => {
    //              console.log(err)
    //           })

    //     } else {
    //         setCehckText({ ...checkText, email : '잘못된 이메일 형식입니다.'})
    //     }
    // }
    // if(event.target.placeholder === 'nickname') {
    //     if(regN.test(event.target.value)) {
    //         axios
    //           .post('',{inputInfo.nickname}, config)
    //           .then((res) => {
    //               if(res.data.message === 'ok') {
    //                 setCehckText({ ...checkText, nickname : '사용 가능한 닉네임입니다.'})
    //               } else {
    //                 setCehckText({ ...checkText, nickname : '중복된 닉네임입니다.'})
    //               }
    //           })
    //          .catch((err) => {
    //              console.log(err)
    //           })
    //     } else {
    //         setCehckText({ ...checkText, nickname : '닉네임은 2~10글자 사이로 입력해주세요.'})
    //     }
    // }
=======
    if (event.target.placeholder === 'email') {
      if (regEmail.test(event.target.value)) {
        // axios
      } else setCheckText({ ...checkText, email: '잘못된 이메일 형식입니다.' });
    }
    if (event.target.placeholder === 'nickname') {
      if (regNickname.test(event.target.value)) {
        // axios
      } else setCheckText({ ...checkText, nickname: '닉네임은 2~10글자 사이로 입력해 주세요.' });
    }
>>>>>>> 6590b338f7bd5a785cfb95310822206908789329
  };

  const handlePwBlur = (event) => {
    if (event.target.placeholder === 'password') {
<<<<<<< HEAD
      if (event.target.value === '') setCehckText({ ...checkText, password: '' });
      else if (regPw.test(event.target.value)) setCehckText({ ...checkText, password: '사용 가능한 비밀번호 입니다.' });
      else setCehckText({ ...checkText, password: '알파벳, 숫자, 특수문자를 포함하여 8~15글자를 입력해주세요.' });
    }

    if (event.target.placeholder === 'password check') {
      if (event.target.value === '') setCehckText({ ...checkText, passwordCheck: '' });
      else if (inputInfo.password === event.target.value) setCehckText({ ...checkText, passwordCheck: '비밀번호가 일치합니다.' });
      else setCehckText({ ...checkText, passwordCheck: '비밀번호가 일치하지 않습니다.' });
=======
      if (event.target.value === '') setCheckText({ ...checkText, password: '' });
      else if (regPw.test(event.target.value)) setCheckText({ ...checkText, password: '사용 가능한 비밀번호 입니다.' });
      else setCheckText({ ...checkText, password: '알파벳, 숫자, 특수문자를 포함한 8~15글자를 입력해주세요.' });
    }
    if (event.target.placeholder === 'password check') {
      if (event.target.value === '') setCheckText({ ...checkText, passwordCheck: '' });
      else if (inputInfo.password === event.target.value) setCheckText({ ...checkText, passwordCheck: '비밀번호가 일치합니다.' });
      else setCheckText({ ...checkText, passwordCheck: '비밀번호가 일치하지 않습니다.' });
>>>>>>> 6590b338f7bd5a785cfb95310822206908789329
    }
  };

  return (
    <div>
<<<<<<< HEAD
      <h3>Sign Up</h3>
      {/* 이메일 형식인지 확인 */}
      <input type='email' placeholder='Email' onChange={handleInput} onBlur={handleOnBlur} />
      <div>{checkText.email}</div>
      {/* 글자수, 특수문자 제한  */}
      <input type='text' placeholder='nickname' onChange={handleInput} onBlur={handleOnBlur} />
      <div>{checkText.nickname}</div>
      {/* 알파벳, 숫자, 특수문자를 포함하여 8~15글자 */}
      <input type='password' placeholder='password' onChange={handleInput} onBlur={handlePwBlur} />
      <div>{checkText.password}</div>
      {/* 패스워드가 같은지만 확인 */}
      <input type='password' placeholder='password check' onChange={handleInput} onBlur={handlePwBlur} />
      <div>{checkText.passwordCheck}</div>
      {/* 성공시 login 리다이렉트 */}
=======
      {/* 안쪽 div 다 없애고 CSS로 처리하기 */}
      <div>
        {/* 포커스 아웃 이벤트 발생시 */}
        {/* 요청 보내기 전에 이메일 형식인지 확인 */}
        {/* 요청보내서 중복확인 */}
        <input type='email' placeholder='email' onChange={handleInput} onBlur={handleOnBlur} />
        <div>{checkText.email}</div>
      </div>
      <div>
        {/* 포커스 아웃 이벤트 발생시 */}
        {/* 요청 보내기 전에 글자수, 특수문자 제한 */}
        {/* 요청 보내서 중복확인 */}
        <input type='text' placeholder='nickname' onChange={handleInput} onBlur={handleOnBlur} />
        <div>{checkText.nickname}</div>
      </div>
      <div>
        {/* 포커스 아웃 이벤트 발생시 */}
        {/* 알파벳, 숫자, 특수문자 포함 8~15글자 사이로 */}
        <input type='password' placeholder='password' onChange={handleInput} onBlur={handlePwBlur} />
        <div>{checkText.password}</div>
      </div>
      <div>
        {/* 포커스 아웃 이벤트 발생시 */}
        {/* 위에꺼랑 같은지 비교 */}
        <input type='password' placeholder='password check' onChange={handleInput} onBlur={handlePwBlur} />
        <div>{checkText.passwordCheck}</div>
      </div>
      {/* 성공시 로그인 리다이렉트 */}
>>>>>>> 6590b338f7bd5a785cfb95310822206908789329
      <button>Sign Up</button>
    </div>
  );
}

export default SignUp;

<<<<<<< HEAD
// 1. 중복확인 요청해서 받아오기
// 2. 서버에러가 났을 시 다시시도해주세요 띄우기
// 3. 성공하면 login 리다이렉트
=======
// 1. 중복확인 요청해서 받기
// 2. 가입 요청 보내기 서버에러 발생시 '잠시 후 다시시도해 주세요' 같은거 버튼 밑에 띄우기
// 3. 성공시 로그인 페이지로 리다이렉트
>>>>>>> 6590b338f7bd5a785cfb95310822206908789329
