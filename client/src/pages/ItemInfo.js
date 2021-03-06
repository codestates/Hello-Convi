import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Review from '../components/Review';
import styled from 'styled-components';

const ItemInfoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 50px;
`;
const HeaderWrap = styled.div`
  display: flex;
  align-items: center;

  >div {
    display: flex;
    flex-direction: column;
    >h3 {
      margin: 20px 0 0 0;
      color: #ffffff;
      text-shadow: 1px 2px 3px #34495E;
    }
  }
  .img {
    width: 300px;
    height: 250px;
  }
`;

function ItemInfo () {
  const [loading, setLoading] = useState(false);
  const curItemInfo = useSelector(state => state.curItemInfo);
  const [reviewsInfo, setReviewsInfo] = useState([{ photo: '', name: '', price: '', score: '' }]); // -> axios 구현한 후 이걸로 사용
  const navigate = useNavigate();

  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };

  const getGroupList = async () => {
    await axios
      .get(`http://localhost:8080/review?itemid=${curItemInfo.itemid}`, config)
      .then((res) => {
        setReviewsInfo(res.data.data);
      });
  };

  useEffect(() => {
    if (curItemInfo.itemid === '') navigate('/');
    setLoading(true);
    getGroupList();
    setLoading(false);
  }, []);

  return (
    <div>
      {loading
        ? (<div>Loading중...</div>)
        : (
          <ItemInfoWrap>
            <HeaderWrap>
              <img src={curItemInfo.photo} alt='logo' className='img' />
              <div>
                <h3>이름 : {curItemInfo.itemname}</h3>
                <h3>가격 : {curItemInfo.price}</h3>
                <h3>평점 : {curItemInfo.score}</h3>
              </div>
            </HeaderWrap>
            {reviewsInfo.map((item, idx) => {
              return (
                <div key={idx}>
                  <Review item={item} />
                </div>
              );
            })}
          </ItemInfoWrap>
          )}
    </div>
  );
}

export default ItemInfo;
