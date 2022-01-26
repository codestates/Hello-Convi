import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Search from "../components/Search";
import axios from 'axios';
import dummyItem1Reviews from '../dummy/item1Reviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const ReviewWrap = styled.div`
  width: 490px;
  height: 100px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0px 4px 10px #34495E;
  border-radius: 15px;
  margin-bottom: 15px;
  .content {
    width: 80%;
    margin-left: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 16px;    
    max-height: 48px;     
    -webkit-line-clamp: 2; /* 표시하고자 하는 라인 수 */
    -webkit-box-orient: vertical;
  }
`;
const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
    .faStar {
    color: #B2B2B2;
  }

  .yellowStar {
    color: orange;
  }
`;

function Review ({ review }) {
  console.log(review)
  const scoreToStar = (score) => {
    const result = [];
    

    for (let i = 1; i <= 5; i++) {
      if (i <= score) result.push(<FontAwesomeIcon className='yellowStar' icon={faStar} />);
      else if (i > score) result.push(<FontAwesomeIcon className='faStar' icon={faStar} />);
    }

    return result;
  };

  return (
    <ReviewWrap>
      <ReviewInfo>
        <span>{scoreToStar(3)}</span>
        <span></span>
      </ReviewInfo>
      <div className='content'>리뷰ㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅀㅇㅎㅇㅎ</div>
    </ReviewWrap>
  );
}

export default Review;
