import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';
import dummyItems from '../dummy/dummyItems';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Rating from './Rating';

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
  &:hover {
    cursor: pointer;
    outline: none;
    color: black;
  }
`;

const ModalView = styled.div`
    border-radius : 10px;
    background-color : #ffffff;
    width : 40rem;
    height : 50rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .close_btn {
        margin-top : 5px;
        padding-left: 600px;
        cursor : pointer;        
    }

    img {
      height: 150px;
      width: 350px;
      margin-bottom: 10px;
    }
`;

const SelectBox = styled.div`
  margin-top: -20px;
  width: 80%;
  display: flex;
  align-items: center;


  select {
    appearance: none;
    -moz-appearance: none; /* Firefox */ 
    -webkit-appearance: none; /* Safari and Chrome */
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    
    color: #444;
    background-color: #fff;
    
    height: 40px;
    width: 100px;
    padding-left : 20px;
    margin-left: 135px;
    
    border: 1px solid #aaa;
    border-radius: .5em;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    &:hover,:focus {
      border-color: #34495E;
      box-shadow: 0 0 1px 1px #34495E;
      box-shadow: 0 0 0 3px -moz-mac-focusring;
      color: #34495E;
      outline: none;
     }
    }
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 450px;
  textarea {
    resize: none;
    border: solid 2px #34495E;
    width: 89%;
    height: 300px;
    font-size: 16px;
    padding: 10px;
  }
  button {
    width: 100px;
    height: 2.5rem;
    border: none;
    border-radius: 10px;
    background-color: #34495E;
    color: #ffffff;
    font-weight: 700;
    font-size: 1.1em;
    transition: all 0.5s;
    margin-left: 300px;
    margin-top: 20px;
    &:hover,:focus {
      cursor: pointer;
      outline: none;
      transform: scale(1.05);
      color: #34495E;;
      background-color: white;
    }
  }
`;

function ReviewModal () {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };

  const [isOpen, setIsOpen] = useState(false);
  const [searchedItem, setSearchedItem] = useState([]);
  const [choice, setChoice] = useState('');
  const [stars, setStars] = useState(1);
  // const [reviewContent, setReviewContent] = useState('');

  const { userInfo, curItemInfo } = useSelector(state => state);

  const handleOpenModal = function () {
    console.log(searchedItem);
    setIsOpen(!isOpen);
  };

  const handleOptionChg = function (event) {
    // console.dir(event.target);
    setChoice(event.target.value);
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    // console.log(event.target[0].value);

    const reviewContent = event.target[0].value;

    console.log(choice, reviewContent, userInfo.userId);

    axios.post('http://localhost:8080/review', {
      itemId: choice,
      content: reviewContent,
      userId: userInfo.userId,
      score: stars
    }, config).then((res) => {
      setIsOpen(!isOpen);
    }).catch(console.log);
  };

  // const handleInput = function(event) {
  //     //console.dir(event.target)
  //     setReviewContent(event.target.value);
  // }

  return (
    <ModalContainer>
      <ModalBtn onClick={handleOpenModal}>
        <FontAwesomeIcon className='icon' icon={faEdit} />
      </ModalBtn>
      {isOpen
        ? (
          <ModalBackDrop onClick={handleOpenModal}>
            <ModalView onClick={(event) => event.stopPropagation()}>
              <span className='close_btn' onClick={handleOpenModal}>&times;</span>
              <img src='images/logo3.png' alt='logo' />
              <Search setSearchedItem={setSearchedItem} />
              {/* default는 curItemInfo.itemname으로 */}
              <SelectBox>
                <Rating className='stars' setStars={setStars} />
                <select onChange={handleOptionChg}>
                  {/* {searchedItem.map((item, idx) => {
                              return <option value={item.itemname}></option>
                          })} */}
                  <option>-- 상품 --</option>
                  {dummyItems.map((item, idx) => {
                    if (item.itemid === curItemInfo.itemid) return <option key={idx} value={item.itemname} selected>{item.itemname}</option>;
                    return <option key={idx} value={item.itemid}>{item.itemname}</option>;
                  })}
                </select>
              </SelectBox>
              <FormBox onSubmit={handleSubmit}>
                <textarea placeholder='리뷰를 남겨보세요' />
                {/* 요청보내기      */}
                <button>리뷰작성</button>
              </FormBox>
            </ModalView>
          </ModalBackDrop>
          )
        : null}
    </ModalContainer>

  );
}

export default ReviewModal;
