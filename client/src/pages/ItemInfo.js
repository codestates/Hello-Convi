import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
//import Search from '../components/Search';
import axios from 'axios';
//import dummyItem1Reviews from '../dummy/item1Reviews';
// import Review from '../components/Review';
import styled from 'styled-components';
// import { ReviewInfo } from '../components';
// import { resolvePath } from 'react-router-dom';

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
  const curItemInfo = useSelector(state => state.curItemInfo);
  const [reviewsInfo, setReviewsInfo] = useState(0); // -> axios 구현한 후 이걸로 사용
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };

  useEffect(() => {
    // axios.get 하고 itemReviewed 채워넣기
    axios.get(`http://localhost:8080/review?itemid=${curItemInfo.itemid}`, config).then((res) => {
      setTimeout(() => {
        setReviewsInfo(() => res.data.data);
        console.log(res.data.data, reviewsInfo);
      }, 500);
    });
  }, []);

  return (

    <ItemInfoWrap>
      {/* advanced : iteminfo의 search 요소는 추후 모달 방식 이용하여 추가 */}
      {/* <Search setSearchedItem={setSearchedItem}/> */}
      {/* <div>{curItemInfo.photo}</div>
        <div>
          {curItemInfo.itemname}<br />{curItemInfo.price}
        </div> */}
      {reviewsInfo
        ? (
          <HeaderWrap>
            <div>성공?</div>
          </HeaderWrap>
          )
        : null}
      {/* {reviewsInfo.map((review, idx) => {
          return (
            <div key={idx}>
              <Review review={review} />
            </div>
          );
        })} */}
    </ItemInfoWrap>

  );
}

export default ItemInfo;
