import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';
import dummyItems from '../dummy/dummyItems';
import { useSelector } from 'react-redux';
import axios from 'axios';

const ModalBackDrop = styled.div`
    position : fixed;
    z-index : 999;
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

    > div.close_btn {
        margin-top : 5px;
        cursor : pointer;        
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

    console.log(choice, reviewContent, userInfo.nickname);

    axios.post('http://localhost:8080/review', {
      itemId: choice,
      content: reviewContent,
      userId: userInfo.nickname,
      score: '5'
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
      {/* 폰트어썸으로 */}
      <ModalBtn onClick={handleOpenModal}>
        <FontAwesomeIcon className='icon' icon={faEdit} />
      </ModalBtn>
      {isOpen
        ? (
          <ModalBackDrop onClick={handleOpenModal}>
            <ModalView onClick={(event) => event.stopPropagation()}>
              <span className='close_btn' onClick={handleOpenModal}>&times;</span>
              {/* search components로 */}
              <Search setSearchedItem={setSearchedItem} />
              {/* option 태그로 */}
              {/* default는 curItemInfo.itemname으로 */}
              <select onChange={handleOptionChg}>
                {/* {searchedItem.map((item, idx) => {
                            return <option value={item.itemname}></option>
                        })} */}
                <option>물건 고르기</option>
                {dummyItems.map((item, idx) => {
                  if (item.itemid === curItemInfo.itemid) return <option key={idx} value={item.itemname} selected>{item.itemname}</option>;
                  return <option key={idx} value={item.itemid}>{item.itemname}</option>;
                })}
              </select>
              <div>score</div>
              <form onSubmit={handleSubmit}>
                <textarea placeholder='리뷰를 남겨보세요' />
                {/* 요청보내기      */}
                <button>리뷰작성</button>
              </form>
            </ModalView>
          </ModalBackDrop>
          )
        : null}
    </ModalContainer>

  );
}

export default ReviewModal;
