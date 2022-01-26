// import { useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import Search from '../components/Search';
// import axios from 'axios';
// import dummyItem1Reviews from '../dummy/item1Reviews';
// import Review from '../components/Review';
// import styled from 'styled-components';
// import { ReviewInfo } from '../components';

// const ItemInfoWrap = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   height: 100%;
//   padding-top: 50px;
// `;
// const HeaderWrap = styled.div`
//   display: flex;
//   align-items: center;

//   >div {
//     display: flex;
//     flex-direction: column;
//     >h3 {
//       margin: 20px 0 0 0;
//       color: #ffffff;
//       text-shadow: 1px 2px 3px #34495E;
//     }
//   }
//   .img {
//     width: 300px;
//     height: 250px;
//   }
// `;

// function ItemInfo() {
//   const [loading, setLoading] = useState(true);
//   const curItemInfo = useSelector(state => state.curItemInfo);
//   const [reviewsInfo, setReviewsInfo] = useState([{name:''}]); // -> axios 구현한 후 이걸로 사용
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     withCredentials: true
//   };

//   const getReviewList = async () => {
//     await axios
//       .get(`http://localhost:8080/review?itemid=${curItemInfo.itemid}`, config)
//       .then((res) => {

//         setReviewsInfo(res.data.data)
//       });
//   };

//   useEffect(() => {
//     getGroupList();
//     setLoading(false);
//   }, []);
// console.log(getReviewList)
//   return (
//     <ItemInfoWrap>
//       {loading
//         ? <div>Loading중...</div>
//         :
//         <span>
//         <HeaderWrap>
//           <img src={getReviewList[0].photo} alt='logo' className='img' />
//           <div>
//             <h3>이름 : {getReviewList[0].name}</h3>
//             <h3>가격 : {getReviewList[0].price}</h3>
//             <h3>평점 : {getReviewList[0].score}</h3>
//           </div>
//         </HeaderWrap>
//         {/* {reviewsInfo.map((review, idx) => {
//           return (
//             <div key={idx}>
//               <Review review={review} />
//             </div>
//           );
//         })} */}
//         </span>
//       }
//     </ItemInfoWrap>
//   );
// }

// export default ItemInfo;
