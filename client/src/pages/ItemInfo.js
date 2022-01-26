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

// function ItemInfo () {
//   const [loading, setLoading] = useState(false);
//   const curItemInfo = useSelector(state => state.curItemInfo);
//   const [reviewsInfo, setReviewsInfo] = useState('ok'); // -> axios 구현한 후 이걸로 사용
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     withCredentials: true
//   };

//   // const getGroupList = async () => {
//   //   await axios
//   //     .get(`http://localhost:8080/review?itemid=${curItemInfo.itemid}`, config)
//   //     .then((res) => setReviewsInfo(res.data.data));
//   // };
//   useEffect(() => {
//     setLoading(true);
//     const getGroupList = async () => {
//       await axios
//         .get(`http://localhost:8080/review?itemid=${curItemInfo.itemid}`, config)
//         .then((res) => setReviewsInfo(res.data.data));
//     };
//     getGroupList();
//     setLoading(false);
//   }, []);
//   console.log(reviewsInfo);

//   return (
//     <ItemInfoWrap>
//       {/* advanced : iteminfo의 search 요소는 추후 모달 방식 이용하여 추가 */}
//       {/* <Search setSearchedItem={setSearchedItem}/> */}
//       {/* <div>{curItemInfo.photo}</div>
//         <div>
//           {curItemInfo.itemname}<br />{curItemInfo.price}
//         </div> */}
//       {loading
//         ? <div>Loading중...</div>
//         : <HeaderWrap>
//           <img src={reviewsInfo[0].photo} alt='logo' className='img' />
//           <div>
//             <h3>이름 : {reviewsInfo[0].name}</h3>
//             <h3>가격 : {reviewsInfo[0].price}</h3>
//             <h3>평점 : {reviewsInfo[0].score}</h3>
//           </div>

//         </HeaderWrap>
//         /* {reviewsInfo.map((review, idx) => {
//             return (
//               <div key={idx}>
//                 <Review review={review} />
//               </div>
//             );
//           })} */
//       }

//     </ItemInfoWrap>
//   );
// }

// export default ItemInfo;
