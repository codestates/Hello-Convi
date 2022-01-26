// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import Search from "../components/Search";
// import axios from 'axios';
// import dummyItem1Reviews from '../dummy/item1Reviews';
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
  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   withCredentials: true
  // };
  // const curItemInfo = useSelector(state => state.curItemInfo);
  // const [searchedItem, setSearchedItem] = useState([]);- advanced
  // const [reviews, setReviews] = useState([]); // -> axios 구현한 후 이걸로 사용
  // const [isErr, setIsErr] = useState(false);

  // useEffect(() => {
  //   axios.get(`http://localhost:8080/review/${curItemInfo.itemid}`, config)
  //     .then((res) => {
  //       console.log(res);
  //       setReviews(res.data.data);
  //     });
  //   .catch((err) => {
  //     setIsErr(err);
  //   });
  // }, []);
  // console.log(curItemInfo);

  return (
    <ItemInfoWrap>
      {/* advanced : iteminfo의 search 요소는 추후 모달 방식 이용하여 추가 */}
      {/* <Search setSearchedItem={setSearchedItem}/> */}
      {/* <div>{curItemInfo.photo}</div>
        <div>
          {curItemInfo.itemname}<br />{curItemInfo.price}
        </div> */}
      <HeaderWrap>
        <img src='/images/logo3.png' alt='logo' className='img' />
        <div>
          <h3>물건 이름</h3>
          <h3>물건 가격</h3>
          <h3>평균 평점</h3>
        </div>
      </HeaderWrap>
      <Review />
      <Review />
      <Review />
    </ItemInfoWrap>
  );
}

export default ItemInfo;
