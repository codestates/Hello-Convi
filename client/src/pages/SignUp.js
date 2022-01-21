import { useEffect, useState } from "react";

function SignUp () {
    const [inputInfo, setInputInfo] = useState({
        email: '',
        nickname: '',
        password: '',
        passwordCheck: '',
    })

    const [checkText, setCehckText] = useState({
        email: '',
        nickname: '',
        password: '',
        passwordCheck: '',
    })

    const regEmail =/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    const regPw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,15}$/;
    const regN = /^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9]{2,10}$/


    const handleInput = (event) => {
        if(event.target.placeholder === 'Email') {
            setInputInfo({...inputInfo, email: event.target.value});
        }
        if(event.target.placeholder === 'nickname') {
            setInputInfo({...inputInfo, nickname: event.target.value});
        }
        if(event.target.placeholder === 'password') {
            setInputInfo({...inputInfo, password: event.target.value});
        }
        if(event.target.placeholder === 'password check') {
            setInputInfo({...inputInfo, passwordCheck: event.target.value});
        }
    }

    const handleOnBlur = (event) => {
        console.log(event.target)
    }

    const handlePwBlur = (event) => {
        if(event.target.placeholder === 'password') {
            if(event.target.value === '') setCehckText({ ...checkText, password : ''})
            else if(regPw.test(event.target.value)) setCehckText({ ...checkText, password : '사용 가능한 비밀번호 입니다'})
            else setCehckText({ ...checkText, password : '잘못된 비밀번호 입니다'})
        }
        
        if(event.target.placeholder === 'password check') {
            if(event.target.value === '') setCehckText({ ...checkText, passwordCheck : ''})
            else if(inputInfo.password === event.target.value) setCehckText({ ...checkText, passwordCheck : '비밀번호가 일치합니다.'})
            else setCehckText({ ...checkText, passwordCheck : '비밀번호가 일치하지 않습니다.'})
        }
    }


    return (
        <div>
            <h3>Sign Up</h3>
            {/* 이메일 형식인지 확인 */}
            <input type='email' placeholder="Email" onChange={handleInput} onBlur={handleOnBlur}/>
            <div>{checkText.email}</div>
            {/* 글자수, 특수문자 제한  */}
            <input type='text' placeholder="nickname" onChange={handleInput} onBlur={handleOnBlur}/>
            <div>{checkText.nickname}</div>
            {/* 알파벳, 숫자, 특수문자를 포함하여 8~15글자 */}
            <input type='password' placeholder="password" onChange={handleInput} onBlur={handlePwBlur}/>
            <div>{checkText.password}</div>
            {/* 패스워드가 같은지만 확인 */}
            <input type='password' placeholder="password check" onChange={handleInput} onBlur={handlePwBlur}/>
            <div>{checkText.passwordCheck}</div>
            {/* 성공시 login 리다이렉트 */}
            <button>Sign Up</button>
        </div>
    )
}

export default SignUp;

// 1. 중복확인 요청해서 받아오기
// 2. 서버에러가 났을 시 다시시도해주세요 띄우기
// 3. 성공하면 login 리다이렉트