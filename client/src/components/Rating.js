/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const ReviewBox = styled.div`
  padding: 30px;
  color: #999;
  font-size: 20px;

  .faStar {
    margin: 20px 5px 20px 0;
    opacity: 0.1;
    cursor: pointer;
    font-size: 20px;
  }

  .yellowStar {
    color: orange;
    opacity: 1;
  }
`;

const StarContainer = styled.div`
  text-align: center;
  border: none;
  background-color: white;
`;

const Rating = () => {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);

  // const goToAxios = e => {
  //   setClicked(e.target.id);
  //     //사용할 http 메소드
  //     method: 'POST',
  //     //토큰
  //     headers: {
  //       Authorization:
  //     },
  //     //서버에 보낼 데이터 (별점)
  //     body: JSON.stringify({
  //       rating: e.target.id,
  //     }),
  //   });
  // };

  return (
    <ReviewBox>
      <StarContainer>
        {[1, 2, 3, 4, 5].map(el => (
          <FontAwesomeIcon
            className='icon' icon={faStar}
            className={`faStar ${
              (clicked >= el) | (hovered >= el) && 'yellowStar'
            }`}
            key={el}
            onMouseEnter={() => setHovered(el)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => {
              console.log(el);
              setClicked(el);
            }}
          />
        ))}
      </StarContainer>
    </ReviewBox>
  );
};

export default Rating;

// style-component 사용
