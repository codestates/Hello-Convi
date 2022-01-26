import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Item from '../components/Item';
import styled from 'styled-components';
import axios from 'axios';

const MyPageWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 100px;
`;
const InfoWrap = styled.div`
  margin-right: 150px;
  margin-bottom: 30px;
`;

function MyPage () {
  const userInfo = useSelector(state => state.userInfo);
  const [itemReviewed, setItemReviewed] = useState([]);
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };
  useEffect(() => {
    // axios.get 하고 itemReviewed 채워넣기
    axios.get(`http://localhost:8080/getitems?userid=${userInfo.userId}`, config)
      .then(el => setItemReviewed(el.data.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <MyPageWrap>
      <InfoWrap>
        <h1>{userInfo.nickname} 님 환영합니다 !</h1>
        <div>
          <div>{userInfo.email}</div>
          {userInfo.oauth ? null : <Link to='/mypage/edit' className='btn'>회원정보수정</Link>}
        </div>
      </InfoWrap>
      <div>
        {itemReviewed.map((item, idx) => {
          return (
            <div key={idx}>
              <Item item={item} />
            </div>
          );
        })}
      </div>
    </MyPageWrap>
  );
}

export default MyPage;
