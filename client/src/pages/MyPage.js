import React, { useState, useEffect } from 'react';
import { Link/* , useNavigate */ } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Item from '../components/Item';
import styled from 'styled-components';
import axios from 'axios';
import { DropOutModal } from '../components';

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
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    getGroupList();
  }, [userInfo]);

  const getGroupList = () => {
    axios.get(`http://localhost:8080/review?userid=${userInfo.userId}`, config)
      .then(el => {
        setItemReviewed(el.data.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  };

  // console.log(itemReviewed);

  return (
    <MyPageWrap>
      <InfoWrap>
        <h1>{userInfo.nickname} 님 환영합니다 !</h1>
        <div>
          <div>{userInfo.email}</div>
          {userInfo.oauth ? null : <Link to='/mypage/edit' className='btn'>회원정보수정</Link>}
          <DropOutModal />
        </div>
      </InfoWrap>
      {!loading
        ? (
          <div>
            {itemReviewed.map((item, idx) => {
              return (
                <div key={idx}>
                  <Item item={item} />
                </div>
              );
            })}
          </div>)
        : null}
    </MyPageWrap>
  );
}

export default MyPage;
