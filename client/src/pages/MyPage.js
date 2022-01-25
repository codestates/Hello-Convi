import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Item from '../components/Item';
import styled from 'styled-components';
import dummyItems from '../dummy/dummyItems';
// import axios from 'axios';

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

  // const [itemReviewed, setItemReviewed] = useState([]);

  useEffect(() => {
    // axios.get 하고 itemReviewed 채워넣기
  }, []);

  return (
    <MyPageWrap>
      <InfoWrap>
        <h1>{userInfo.nickname} 님 환영합니다 !</h1>
        <div>
          <div>{userInfo.email}</div>
          <Link to='/mypage/edit' className='btn'>회원정보수정</Link>
        </div>
      </InfoWrap>
      <div>
        {dummyItems.map((item, idx) => {
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
