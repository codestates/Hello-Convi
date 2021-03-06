import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../store/store';

const ModalBackDrop = styled.div`
    position : fixed;
    z-index : 100;
    top : 0;
    left : 0;
    bottom : 0;
    right : 0;
    background-color : rgba(0, 0, 0, 0.4);
    display : grid;
    place-items : center;
`;

const ModalContainer = styled.div`
    //height : 15rem;
    text-align : center;
`;

const ModalBtn = styled.div`
  text-decoration-line: none;
  color: #34495E;
  font-size: 20px;
  width: 515px;
  display: flex;
  justify-content: flex-start;
  
  >button {
    margin-top: 10px;
    font-size: 15px;
    padding: 0 30px 0 0;
    border: none;
    background-color: white;
    width: 100px;
    height: 30px;
    &:hover {
    cursor: pointer;
    outline: none;
    color: gray;
  }
  }
`;

const ModalView = styled.div`
    border-radius : 10px;
    background-color : #ffffff;
    width : 35rem;
    height : 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .img {
      height: 200px;
      width: 500px;
      margin-bottom: 10px;
    }
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  button {
    width: 130px;
    height: 2.5rem;
    border: none;
    border-radius: 10px;
    background-color: #34495E;
    color: #ffffff;
    font-weight: 700;
    font-size: 1.1em;
    transition: all 0.5s;
    margin-top: 40px;
    &:hover,:focus {
      cursor: pointer;
      outline: none;
      transform: scale(1.05);
      color: #34495E;;
      background-color: white;
    }
  }
  .green {
    color: green;
  }
  .red {
    color: red;
  }
`;
const LoginInput = styled.input`
  border: 2px solid #F1F1F1;
  border-radius: 7px;
  height: 40px;
  width: 250px;
  font-size: 16px;
  margin-bottom: 3px;
`;

const MyPageEditInput = styled.input`
  border: 2px solid #F1F1F1;
  border-radius: 7px;
  height: 40px;
  width: 250px;
  font-size: 16px;
`;

function DropOutModal () {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };

  const [isOpen, setIsOpen] = useState(false);
  const { logout } = actionCreators;
  const { userInfo } = useSelector(state => state);
  const [inputInfo, setInputInfo] = useState({
    password: ''
  });

  const [checkText, setCheckText] = useState({
    password: '',
    submit: ''
  });

  const handleOpenModal = function () {
    setIsOpen(!isOpen);
  };

  const handleInput = (event) => {
    if (event.target.placeholder === 'nickname') {
      setInputInfo({ ...inputInfo, nickname: event.target.value });
    }
    if (event.target.placeholder === 'password') {
      setInputInfo({ ...inputInfo, password: event.target.value });
    }
  };

  const handleOnBlur = (event) => {
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
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    // console.log(event.target[0].value);;
    axios.delete('http://localhost:8080/dropout', config);
    dispatch(logout());
    navigate('/');
    window.location.reload();
  };

  return (
    <ModalContainer>
      <ModalBtn>
        <button onClick={handleOpenModal}>????????????</button>
      </ModalBtn>
      {isOpen
        ? (
          <ModalBackDrop onClick={handleOpenModal}>
            <ModalView onClick={(event) => event.stopPropagation()}>
              <img src='images/logo3.png' alt='logo' className='img' />
              <FormBox>
                <MyPageEditInput type='email' placeholder={userInfo.email} disabled />
                <LoginInput type='password' placeholder='password' onChange={handleInput} onBlur={handleOnBlur} />
                {checkText.password === '?????????????????????.'
                  ? (
                    <span className='green'>{checkText.password}</span>
                    )
                  : (
                    <span className='red'>{checkText.password}</span>
                    )}
                <button onClick={handleSubmit}>????????? ??? ??????</button>
              </FormBox>
            </ModalView>
          </ModalBackDrop>
          )
        : null}
    </ModalContainer>

  );
}

export default DropOutModal;
